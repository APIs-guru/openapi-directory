from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customerfilter
from . import customersort


@dataclass_json
@dataclass
class CustomerQuery:
    filter: Optional[customerfilter.CustomerFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    sort: Optional[customersort.CustomerSort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    
