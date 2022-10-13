from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pvforsongcontract


@dataclass_json
@dataclass
class PartialFindResultPvForSongContract:
    items: Optional[List[pvforsongcontract.PvForSongContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    
