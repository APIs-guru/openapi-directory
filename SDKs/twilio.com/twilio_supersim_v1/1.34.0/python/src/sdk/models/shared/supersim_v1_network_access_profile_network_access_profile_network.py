from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork:
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    identifiers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    network_access_profile_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_access_profile_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
