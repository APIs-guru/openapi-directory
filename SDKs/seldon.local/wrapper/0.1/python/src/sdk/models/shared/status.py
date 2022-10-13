from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import statusstatusflag_enum


@dataclass_json
@dataclass
class Status:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[statusstatusflag_enum.StatusStatusFlagEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
