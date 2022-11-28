from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class SettingsUpdateEnumStatusEnum(str, Enum):
    SCHEDULED = "scheduled"
    IN_PROGRESS = "in-progress"
    SUCCESSFUL = "successful"
    FAILED = "failed"

