from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScoreConfigOutput:
    r"""ScoreConfigOutput
    Represents a list of score configurations that apply in the country
    """
    
    score_config_by_country: Optional[List[ScoreConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScoreConfigByCountry') }})
    
