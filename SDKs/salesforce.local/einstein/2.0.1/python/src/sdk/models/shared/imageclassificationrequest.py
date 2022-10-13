from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageClassificationRequest:
    model_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelId' }, 'multipart_form': { 'field_name': 'modelId' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numResults' }, 'multipart_form': { 'field_name': 'numResults' }})
    sample_base64_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleBase64Content' }, 'multipart_form': { 'field_name': 'sampleBase64Content' }})
    sample_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleId' }, 'multipart_form': { 'field_name': 'sampleId' }})
    sample_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleLocation' }, 'multipart_form': { 'field_name': 'sampleLocation' }})
    
