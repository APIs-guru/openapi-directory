from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import availability
from . import error


@dataclass_json
@dataclass
class SearchAvailabilityResponse:
    availabilities: Optional[List[availability.Availability]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilities' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
