# Generated by Django 3.0.7 on 2021-05-04 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0010_auto_20210504_1116'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='show_home',
            field=models.BooleanField(default=True, verbose_name="Afficher dans l'accueil"),
        ),
    ]
