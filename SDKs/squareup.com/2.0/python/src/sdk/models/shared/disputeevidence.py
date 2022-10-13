from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import disputeevidencefile


@dataclass_json
@dataclass
class DisputeEvidence:
    dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dispute_id' }})
    evidence_file: Optional[disputeevidencefile.DisputeEvidenceFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence_file' }})
    evidence_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence_id' }})
    evidence_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence_text' }})
    evidence_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence_type' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    uploaded_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploaded_at' }})
    
