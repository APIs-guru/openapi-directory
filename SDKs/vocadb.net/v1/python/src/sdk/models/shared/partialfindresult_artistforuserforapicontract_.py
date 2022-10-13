from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artistforuserforapicontract


@dataclass_json
@dataclass
class PartialFindResultArtistForUserForAPIContract:
    items: Optional[List[artistforuserforapicontract.ArtistForUserForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    
