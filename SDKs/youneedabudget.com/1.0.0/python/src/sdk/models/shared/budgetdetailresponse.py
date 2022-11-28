from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BudgetDetailResponseData:
    budget: BudgetDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    server_knowledge: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_knowledge') }})
    

@dataclass_json
@dataclass
class BudgetDetailResponse:
    data: BudgetDetailResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
