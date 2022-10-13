from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayorCreateAPIKeyResponse:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    api_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiSecret' }})
    
