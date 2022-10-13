from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import lordsbytype


@dataclass_json
@dataclass
class LordsByTypeItem:
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    value: Optional[lordsbytype.LordsByType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
