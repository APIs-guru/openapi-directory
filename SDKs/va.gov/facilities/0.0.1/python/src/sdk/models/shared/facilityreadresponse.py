from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import facility


@dataclass_json
@dataclass
class FacilityReadResponse:
    data: facility.Facility = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
