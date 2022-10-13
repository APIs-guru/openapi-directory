from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import labelresult


@dataclass_json
@dataclass
class IntentPredictResponse:
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    probabilities: Optional[List[labelresult.LabelResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilities' }})
    sample_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleId' }})
    
