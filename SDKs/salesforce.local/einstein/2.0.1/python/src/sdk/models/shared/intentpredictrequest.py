from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IntentPredictRequest:
    document: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }, 'multipart_form': { 'field_name': 'document' }})
    model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelId' }, 'multipart_form': { 'field_name': 'modelId' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numResults' }, 'multipart_form': { 'field_name': 'numResults' }})
    sample_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleId' }, 'multipart_form': { 'field_name': 'sampleId' }})
    
