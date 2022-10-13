from dataclasses import dataclass, field
from typing import Enum

class WorkspaceEnumQueueOrderEnum(str, Enum):
    FIFO = "FIFO"
    LIFO = "LIFO"

