from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrresult


@dataclass_json
@dataclass
class OcrPredictResponse:
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    probabilities: Optional[List[ocrresult.OcrResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilities' }})
    sample_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleId' }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    
