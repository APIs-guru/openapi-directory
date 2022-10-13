from dataclasses import dataclass, field
from typing import Enum

class MessageFeedbackEnumOutcomeEnum(str, Enum):
    CONFIRMED = "confirmed"
    UNCONFIRMED = "unconfirmed"

