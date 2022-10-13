from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import party


@dataclass_json
@dataclass
class PartyItem:
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    value: Optional[party.Party] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
