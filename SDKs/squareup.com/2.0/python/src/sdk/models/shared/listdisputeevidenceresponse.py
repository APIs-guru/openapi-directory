from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import disputeevidence


@dataclass_json
@dataclass
class ListDisputeEvidenceResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    evidence: Optional[List[disputeevidence.DisputeEvidence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence' }})
    
