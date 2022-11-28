from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class BundleEnumSortByEnum(str, Enum):
    VALID_UNTIL = "valid-until"
    DATE_UPDATED = "date-updated"

