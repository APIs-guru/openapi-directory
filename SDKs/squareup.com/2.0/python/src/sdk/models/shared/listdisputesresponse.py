from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dispute
from . import error


@dataclass_json
@dataclass
class ListDisputesResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    disputes: Optional[List[dispute.Dispute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disputes' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
