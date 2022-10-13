from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import feedconnection
from . import pagination


@dataclass_json
@dataclass
class FeedConnections:
    items: Optional[List[feedconnection.FeedConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    pagination: Optional[pagination.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
