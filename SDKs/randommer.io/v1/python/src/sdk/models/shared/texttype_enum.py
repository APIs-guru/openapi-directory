from dataclasses import dataclass, field
from enum import Enum

class TextTypeEnum(str, Enum):
    PARAGRAPHS = "paragraphs"
    WORDS = "words"

