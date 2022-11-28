from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatasetRelatedChart:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    slice_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slice_name') }})
    viz_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viz_type') }})
    
