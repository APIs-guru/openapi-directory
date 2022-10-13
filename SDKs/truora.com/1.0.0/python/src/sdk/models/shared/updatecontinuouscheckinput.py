from dataclasses import dataclass, field
from typing import Enum

class UpdateContinuousCheckInputStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass
class UpdateContinuousCheckInput:
    frequency: str = field(default=None, metadata={'form': { 'field_name': 'frequency' }})
    status: UpdateContinuousCheckInputStatusEnum = field(default=None, metadata={'form': { 'field_name': 'status' }})
    
