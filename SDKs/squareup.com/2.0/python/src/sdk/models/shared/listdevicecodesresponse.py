from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicecode
from . import error


@dataclass_json
@dataclass
class ListDeviceCodesResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    device_codes: Optional[List[devicecode.DeviceCode]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_codes' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
