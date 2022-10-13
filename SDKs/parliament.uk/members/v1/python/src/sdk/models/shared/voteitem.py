from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import vote


@dataclass_json
@dataclass
class VoteItem:
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    value: Optional[vote.Vote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
