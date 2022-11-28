from dataclasses import dataclass, field
from enum import Enum

class MessageFeedbackEnumOutcomeEnum(str, Enum):
    CONFIRMED = "confirmed"
    UNCONFIRMED = "unconfirmed"

