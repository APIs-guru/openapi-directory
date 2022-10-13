from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicecode
from . import error


@dataclass_json
@dataclass
class CreateDeviceCodeResponse:
    device_code: Optional[devicecode.DeviceCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_code' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
