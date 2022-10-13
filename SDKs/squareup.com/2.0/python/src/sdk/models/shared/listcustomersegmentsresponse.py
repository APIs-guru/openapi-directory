from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import customersegment


@dataclass_json
@dataclass
class ListCustomerSegmentsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    segments: Optional[List[customersegment.CustomerSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
