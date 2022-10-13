from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDisputeEvidenceTextRequest:
    evidence_text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence_text' }})
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence_type' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
