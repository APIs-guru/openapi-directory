from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import change


@dataclass_json
@dataclass
class Change:
    dataset_score_changes: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataset_score_changes' }})
    score_changes: Optional[List[change.Change]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score_changes' }})
    
