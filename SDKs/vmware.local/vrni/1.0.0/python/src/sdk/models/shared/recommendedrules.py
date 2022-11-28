from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecommendedRules:
    results: Optional[List[RecommendedRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    time_range: Optional[TimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_range') }})
    
