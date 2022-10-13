from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timerange
from . import customercreationsourcefilter
from . import customertextfilter
from . import filtervalue
from . import customertextfilter
from . import customertextfilter
from . import timerange


@dataclass_json
@dataclass
class CustomerFilter:
    created_at: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    creation_source: Optional[customercreationsourcefilter.CustomerCreationSourceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_source' }})
    email_address: Optional[customertextfilter.CustomerTextFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address' }})
    group_ids: Optional[filtervalue.FilterValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_ids' }})
    phone_number: Optional[customertextfilter.CustomerTextFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    reference_id: Optional[customertextfilter.CustomerTextFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    updated_at: Optional[timerange.TimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
