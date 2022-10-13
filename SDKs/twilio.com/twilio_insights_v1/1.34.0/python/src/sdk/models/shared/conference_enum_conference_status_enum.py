from dataclasses import dataclass, field
from typing import Enum

class ConferenceEnumConferenceStatusEnum(str, Enum):
    IN_PROGRESS = "in_progress"
    NOT_STARTED = "not_started"
    COMPLETED = "completed"
    SUMMARY_TIMEOUT = "summary_timeout"

