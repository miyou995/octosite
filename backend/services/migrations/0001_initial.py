# Generated by Django 3.0.7 on 2021-05-02 13:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=200, verbose_name='Nom Catégorie')),
                ('slug', models.SlugField(max_length=200, unique=True, verbose_name='Slug')),
                ('description', models.CharField(max_length=400)),
                ('icon_url', models.CharField(max_length=250)),
            ],
            options={
                'verbose_name': 'Catégorie',
                'verbose_name_plural': 'Catégories',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('description', models.CharField(max_length=400)),
                ('show', models.BooleanField(default=True, verbose_name='Afficher')),
                ('icon_url', models.CharField(max_length=250)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='services.Category', verbose_name='Catégorie')),
            ],
            options={
                'verbose_name': 'Article',
                'verbose_name_plural': 'Services',
                'ordering': ('-show',),
            },
        ),
        migrations.CreateModel(
            name='serviceContent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('header', models.CharField(max_length=250)),
                ('text', models.TextField(default='text')),
                ('order', models.IntegerField(default=1)),
                ('service', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='services.Service', verbose_name='Service')),
            ],
        ),
    ]
