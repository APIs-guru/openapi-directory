from dataclasses import dataclass, field
from enum import Enum

class IPCommandEnumPayloadTypeEnum(str, Enum):
    TEXT = "text"
    BINARY = "binary"

