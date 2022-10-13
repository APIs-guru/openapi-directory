from dataclasses import dataclass, field
from typing import Enum

class EmployeeStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    TERMINATED = "TERMINATED"

