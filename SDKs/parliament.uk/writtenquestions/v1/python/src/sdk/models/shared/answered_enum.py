from dataclasses import dataclass, field
from typing import Any,Enum

class AnsweredEnum(str, Enum):
    ANY = "Any"
    ANSWERED = "Answered"
    UNANSWERED = "Unanswered"

