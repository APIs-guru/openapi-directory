from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum

class PollFieldsParameterEnum(str, Enum):
    ID = "id"
    OPTIONS = "options"
    VOTING_STATUS = "voting_status"
    END_DATETIME = "end_datetime"
    DURATION_MINUTES = "duration_minutes"

