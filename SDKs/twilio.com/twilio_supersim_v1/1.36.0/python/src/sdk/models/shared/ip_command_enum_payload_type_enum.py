from dataclasses import dataclass, field
from typing import Enum

class IPCommandEnumPayloadTypeEnum(str, Enum):
    TEXT = "text"
    BINARY = "binary"

