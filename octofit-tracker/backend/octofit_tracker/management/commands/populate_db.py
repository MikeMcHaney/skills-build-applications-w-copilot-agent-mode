from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from djongo import models

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Delete all data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User(email='ironman@marvel.com', name='Iron Man', team='Marvel', is_superhero=True),
            User(email='captain@marvel.com', name='Captain America', team='Marvel', is_superhero=True),
            User(email='batman@dc.com', name='Batman', team='DC', is_superhero=True),
            User(email='wonderwoman@dc.com', name='Wonder Woman', team='DC', is_superhero=True),
        ]
        User.objects.bulk_create(users)

        # Create activities
        activities = [
            Activity(user='Iron Man', activity_type='Running', duration=30, date='2026-01-01'),
            Activity(user='Captain America', activity_type='Cycling', duration=45, date='2026-01-02'),
            Activity(user='Batman', activity_type='Swimming', duration=25, date='2026-01-03'),
            Activity(user='Wonder Woman', activity_type='Yoga', duration=60, date='2026-01-04'),
        ]
        Activity.objects.bulk_create(activities)

        # Create leaderboard
        Leaderboard.objects.create(team='Marvel', points=75)
        Leaderboard.objects.create(team='DC', points=85)

        # Create workouts
        workouts = [
            Workout(name='Super Strength', description='Strength training for superheroes', difficulty='Hard'),
            Workout(name='Agility Boost', description='Agility and flexibility exercises', difficulty='Medium'),
        ]
        Workout.objects.bulk_create(workouts)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data'))
