from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dispute
from . import error


@dataclass_json
@dataclass
class SubmitEvidenceResponse:
    dispute: Optional[dispute.Dispute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispute' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
