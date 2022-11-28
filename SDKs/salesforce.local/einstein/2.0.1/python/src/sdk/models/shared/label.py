from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Label:
    r"""Label
    Contains information about the label with which the example is associated.
    """
    
    dataset_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetId') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    num_examples: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numExamples') }})
    
