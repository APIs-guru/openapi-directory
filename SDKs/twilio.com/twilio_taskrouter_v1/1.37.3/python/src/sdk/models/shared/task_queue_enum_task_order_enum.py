from dataclasses import dataclass, field
from enum import Enum

class TaskQueueEnumTaskOrderEnum(str, Enum):
    FIFO = "FIFO"
    LIFO = "LIFO"

