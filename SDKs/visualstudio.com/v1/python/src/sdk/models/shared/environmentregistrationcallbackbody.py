from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import environmentregistrationcallbackpayloadbody


@dataclass_json
@dataclass
class EnvironmentRegistrationCallbackBody:
    payload: Optional[environmentregistrationcallbackpayloadbody.EnvironmentRegistrationCallbackPayloadBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
