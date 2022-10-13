from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import constituencyitem
from . import link


@dataclass_json
@dataclass
class ConstituencyMembersServiceSearchResult:
    items: Optional[List[constituencyitem.ConstituencyItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    result_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultContext' }})
    skip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip' }})
    take: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'take' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
