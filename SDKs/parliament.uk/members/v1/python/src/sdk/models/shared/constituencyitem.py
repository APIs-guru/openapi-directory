from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import constituency


@dataclass_json
@dataclass
class ConstituencyItem:
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    value: Optional[constituency.Constituency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
