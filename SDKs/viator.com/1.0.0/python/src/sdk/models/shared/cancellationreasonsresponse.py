from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cancellationreason


@dataclass_json
@dataclass
class CancellationReasonsResponse:
    reasons: Optional[List[cancellationreason.CancellationReason]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasons' }})
    
