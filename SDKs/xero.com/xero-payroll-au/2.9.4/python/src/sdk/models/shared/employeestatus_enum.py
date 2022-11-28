from dataclasses import dataclass, field
from enum import Enum

class EmployeeStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    TERMINATED = "TERMINATED"

