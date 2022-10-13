from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIV2010AccountQueue:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    average_wait_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'average_wait_time' }})
    current_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_size' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_size' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
