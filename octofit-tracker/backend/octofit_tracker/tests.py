from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelSmokeTest(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Test Team', description='A test team')
        self.assertEqual(str(team), 'Test Team')

    def test_user_creation(self):
        team = Team.objects.create(name='Test Team2', description='A test team')
        user = User.objects.create(name='Test User', email='test@example.com', team=team, is_superhero=True)
        self.assertEqual(str(user), 'Test User')

    def test_activity_creation(self):
        team = Team.objects.create(name='Test Team3', description='A test team')
        user = User.objects.create(name='Test User2', email='test2@example.com', team=team, is_superhero=True)
        activity = Activity.objects.create(user=user, type='Running', duration=30, date='2026-01-17')
        self.assertEqual(str(activity), 'Test User2 - Running on 2026-01-17')

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Test Workout', description='A test workout')
        self.assertEqual(str(workout), 'Test Workout')

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='Test Team4', description='A test team')
        leaderboard = Leaderboard.objects.create(team=team, total_points=50)
        self.assertEqual(str(leaderboard), 'Leaderboard for Test Team4')
