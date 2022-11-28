from dataclasses import dataclass, field
from enum import Enum

class SmsCommandEnumDirectionEnum(str, Enum):
    TO_SIM = "to_sim"
    FROM_SIM = "from_sim"

