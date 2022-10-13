from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisputeEvidenceFile:
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    filetype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filetype' }})
    
