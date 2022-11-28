from dataclasses import dataclass, field
from enum import Enum

class CommandEnumTransportEnum(str, Enum):
    SMS = "sms"
    IP = "ip"

