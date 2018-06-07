from django.test import TestCase
from todos.models import Todo
# Create your tests here.

class TodoModelTest(TestCase):

    def test_title(self):
        todo = Todo(title="first")
        expected_object_name = todo.title
        self.assertEqual(expected_object_name, 'first')

    def test_description(self):
        todo = Todo(description="first")
        expected_obj = todo.description
        self.assertEqual(expected_obj, 'first')
