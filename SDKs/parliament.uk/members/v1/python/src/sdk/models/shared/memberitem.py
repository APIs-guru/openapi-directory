from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import member


@dataclass_json
@dataclass
class MemberItem:
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    value: Optional[member.Member] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
