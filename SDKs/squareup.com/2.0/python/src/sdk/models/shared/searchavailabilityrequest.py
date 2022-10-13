from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import searchavailabilityquery


@dataclass_json
@dataclass
class SearchAvailabilityRequest:
    query: searchavailabilityquery.SearchAvailabilityQuery = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
