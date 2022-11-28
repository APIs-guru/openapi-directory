from dataclasses import dataclass, field
from enum import Enum

class TimesheetStatusEnum(str, Enum):
    DRAFT = "DRAFT"
    PROCESSED = "PROCESSED"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    REQUESTED = "REQUESTED"

