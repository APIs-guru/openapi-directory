from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebhookBaseInfo:
    external_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAddress' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    
