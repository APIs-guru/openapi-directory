from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import scoreconfigoutput


@dataclass_json
@dataclass
class ScoreConfigsOutput:
    score_configs: List[scoreconfigoutput.ScoreConfigOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score_configs' }})
    
