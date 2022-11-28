from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BudgetSummaryResponseData:
    budgets: List[BudgetSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgets') }})
    default_budget: Optional[BudgetSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_budget') }})
    

@dataclass_json
@dataclass
class BudgetSummaryResponse:
    data: BudgetSummaryResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
