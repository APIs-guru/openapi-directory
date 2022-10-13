from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import searchsubscriptionsfilter


@dataclass_json
@dataclass
class SearchSubscriptionsQuery:
    filter: Optional[searchsubscriptionsfilter.SearchSubscriptionsFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
