from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import liabilitiesgetrequestoptions


@dataclass_json
@dataclass
class LiabilitiesGetRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    options: Optional[liabilitiesgetrequestoptions.LiabilitiesGetRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
