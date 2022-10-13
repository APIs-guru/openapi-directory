from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateContinuousCheckInput:
    check_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'check_id' }})
    frequency: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'frequency' }})
    status: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'status' }})
    
