from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scoreconfig


@dataclass_json
@dataclass
class ScoreConfigOutput:
    score_config_by_country: Optional[List[scoreconfig.ScoreConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScoreConfigByCountry' }})
    
