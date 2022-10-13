from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import detectionresult


@dataclass_json
@dataclass
class ObjectDetectionResponse:
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    probabilities: Optional[List[detectionresult.DetectionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilities' }})
    sample_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleId' }})
    
