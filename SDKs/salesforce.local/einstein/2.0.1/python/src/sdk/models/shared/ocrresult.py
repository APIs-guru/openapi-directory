from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OcrResult:
    r"""OcrResult
    Array of probabilities for the prediction.
    """
    
    attributes: Optional[Attributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probability') }})
    
