from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonthSummariesResponseData:
    months: List[MonthSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('months') }})
    server_knowledge: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclass
class MonthSummariesResponse:
    data: MonthSummariesResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
