from dataclasses import dataclass, field
from typing import Any
from enum import Enum

class AnsweredEnum(str, Enum):
    ANY = "Any"
    ANSWERED = "Answered"
    UNANSWERED = "Unanswered"

