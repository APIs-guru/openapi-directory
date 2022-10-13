from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import budgetsummary
from . import budgetsummary


@dataclass_json
@dataclass
class BudgetSummaryResponseData:
    budgets: List[budgetsummary.BudgetSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgets' }})
    default_budget: Optional[budgetsummary.BudgetSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_budget' }})
    

@dataclass_json
@dataclass
class BudgetSummaryResponse:
    data: BudgetSummaryResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
