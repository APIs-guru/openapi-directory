from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddRulesResponse:
    data: List[Rule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: RulesResponseMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
