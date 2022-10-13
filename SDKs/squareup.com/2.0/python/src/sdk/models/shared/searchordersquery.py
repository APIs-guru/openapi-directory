from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import searchordersfilter
from . import searchorderssort


@dataclass_json
@dataclass
class SearchOrdersQuery:
    filter: Optional[searchordersfilter.SearchOrdersFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    sort: Optional[searchorderssort.SearchOrdersSort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    
