from dataclasses import dataclass, field
from enum import Enum

class MessageEnumOrderTypeEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

