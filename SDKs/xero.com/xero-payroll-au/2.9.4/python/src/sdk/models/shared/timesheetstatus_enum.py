from dataclasses import dataclass, field
from typing import Enum

class TimesheetStatusEnum(str, Enum):
    DRAFT = "DRAFT"
    PROCESSED = "PROCESSED"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    REQUESTED = "REQUESTED"

