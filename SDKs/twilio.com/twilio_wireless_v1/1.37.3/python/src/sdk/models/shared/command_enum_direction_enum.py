from dataclasses import dataclass, field
from enum import Enum

class CommandEnumDirectionEnum(str, Enum):
    FROM_SIM = "from_sim"
    TO_SIM = "to_sim"

