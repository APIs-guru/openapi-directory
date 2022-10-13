from dataclasses import dataclass, field
from typing import Enum

class IPCommandEnumDirectionEnum(str, Enum):
    TO_SIM = "to_sim"
    FROM_SIM = "from_sim"

