from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import discussiontopiccontract


@dataclass_json
@dataclass
class PartialFindResultDiscussionTopicContract:
    items: Optional[List[discussiontopiccontract.DiscussionTopicContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    
