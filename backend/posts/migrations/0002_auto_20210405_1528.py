# Generated by Django 3.0.7 on 2021-04-05 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='postinfo',
            options={'verbose_name': 'Article', 'verbose_name_plural': 'Articles'},
        ),
        migrations.AlterField(
            model_name='postimage',
            name='images',
            field=models.FileField(upload_to='images/blog', verbose_name='Images associées'),
        ),
        migrations.AlterField(
            model_name='postinfo',
            name='image_thumbnail',
            field=models.ImageField(blank=True, upload_to='images/blog', verbose_name='Photo Principale'),
        ),
    ]
