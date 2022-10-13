from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import devicecode


@dataclass_json
@dataclass
class CreateDeviceCodeRequest:
    device_code: devicecode.DeviceCode = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_code' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
