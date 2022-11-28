from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Change:
    r"""Change
    Represents changes in check scores between continuous checks
    """
    
    dataset_score_changes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset_score_changes') }})
    score_changes: Optional[List[Change]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score_changes') }})
    
