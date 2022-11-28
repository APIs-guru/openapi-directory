from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageClassificationResponse:
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    probabilities: Optional[List[LabelResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilities') }})
    sample_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleId') }})
    
