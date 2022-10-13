from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIV2010AccountNewKey:
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    
