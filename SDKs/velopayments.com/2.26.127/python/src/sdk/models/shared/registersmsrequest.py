from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterSmsRequest:
    sms_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smsNumber' }})
    
