from dataclasses import dataclass, field
from typing import Enum

class TaskQueueEnumTaskOrderEnum(str, Enum):
    FIFO = "FIFO"
    LIFO = "LIFO"

