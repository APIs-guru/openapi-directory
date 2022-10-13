from dataclasses import dataclass, field
from typing import Enum

class CommandEnumTransportEnum(str, Enum):
    SMS = "sms"
    IP = "ip"

