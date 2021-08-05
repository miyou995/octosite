# Generated by Django 3.0.7 on 2021-04-05 14:12

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
            ],
            options={
                'verbose_name': 'Catégorie',
                'verbose_name_plural': 'Catégories',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='SubCateory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=200, verbose_name='Sous Catégorie')),
                ('slug', models.SlugField(max_length=200, unique=True, verbose_name='Slug')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sub_categories', to='posts.Category', verbose_name='Catégorie')),
            ],
            options={
                'verbose_name': 'Sous Catégorie',
                'verbose_name_plural': 'Sous Catégories',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='PostInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('show', models.BooleanField(default=True, verbose_name='Afficher')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Date de Création')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Date de dernière mise à jour')),
                ('image_thumbnail', models.ImageField(blank=True, upload_to='images/blog/%Y/%m/%d', verbose_name='Photo Principale')),
                ('content', models.TextField()),
                ('subCategory', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='posts.SubCateory', verbose_name='Sous Catégorie')),
            ],
            options={
                'verbose_name': 'Post Info',
                'verbose_name_plural': 'Posts Info',
            },
        ),
        migrations.CreateModel(
            name='PostImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.FileField(upload_to='images/blog/%Y/%m/%d', verbose_name='Images associées')),
                ('post', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='posts.PostInfo', verbose_name='Article')),
            ],
        ),
    ]
