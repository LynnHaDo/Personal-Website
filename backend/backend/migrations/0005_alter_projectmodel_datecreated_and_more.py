# Generated by Django 5.0.1 on 2024-01-29 04:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("backend", "0004_alter_projectmodel_datecreated_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="projectmodel",
            name="dateCreated",
            field=models.DateField(
                default=datetime.datetime(2024, 1, 29, 4, 58, 21, 466448)
            ),
        ),
        migrations.AlterField(
            model_name="projectmodel",
            name="dateFinished",
            field=models.DateField(
                default=datetime.datetime(2024, 1, 29, 4, 58, 21, 466464)
            ),
        ),
    ]
