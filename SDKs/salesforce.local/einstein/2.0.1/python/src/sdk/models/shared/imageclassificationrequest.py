from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImageClassificationRequest:
    model_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelId') }, 'multipart_form': { 'field_name': 'modelId' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numResults') }, 'multipart_form': { 'field_name': 'numResults' }})
    sample_base64_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleBase64Content') }, 'multipart_form': { 'field_name': 'sampleBase64Content' }})
    sample_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleId') }, 'multipart_form': { 'field_name': 'sampleId' }})
    sample_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleLocation') }, 'multipart_form': { 'field_name': 'sampleLocation' }})
    
