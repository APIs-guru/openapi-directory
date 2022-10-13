from dataclasses import dataclass, field
from typing import Enum

class MessageEnumOrderTypeEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

