from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filtervalue


@dataclass_json
@dataclass
class SegmentFilter:
    service_variation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_variation_id' }})
    team_member_id_filter: Optional[filtervalue.FilterValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_member_id_filter' }})
    
