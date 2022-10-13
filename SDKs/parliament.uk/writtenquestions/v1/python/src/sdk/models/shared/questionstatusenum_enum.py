from dataclasses import dataclass, field
from typing import Enum

class QuestionStatusEnumEnum(str, Enum):
    NOT_ANSWERED = "NotAnswered"
    ANSWERED_ONLY = "AnsweredOnly"
    ALL_QUESTIONS = "AllQuestions"

