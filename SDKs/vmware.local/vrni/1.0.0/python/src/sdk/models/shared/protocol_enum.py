from dataclasses import dataclass, field
from typing import Enum

class ProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"
    OTHER = "OTHER"

