from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lordsbytypeitem
from . import link


@dataclass_json
@dataclass
class LordsByTypeMembersServiceSearchResult:
    items: Optional[List[lordsbytypeitem.LordsByTypeItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    result_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultContext' }})
    skip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip' }})
    take: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'take' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
