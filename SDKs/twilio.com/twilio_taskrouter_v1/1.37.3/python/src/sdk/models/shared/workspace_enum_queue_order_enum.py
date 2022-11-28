from dataclasses import dataclass, field
from enum import Enum

class WorkspaceEnumQueueOrderEnum(str, Enum):
    FIFO = "FIFO"
    LIFO = "LIFO"

