from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import searchavailabilityfilter


@dataclass_json
@dataclass
class SearchAvailabilityQuery:
    filter: searchavailabilityfilter.SearchAvailabilityFilter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
