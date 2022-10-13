from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import budgetdetail


@dataclass_json
@dataclass
class BudgetDetailResponseData:
    budget: budgetdetail.BudgetDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budget' }})
    server_knowledge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_knowledge' }})
    

@dataclass_json
@dataclass
class BudgetDetailResponse:
    data: BudgetDetailResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
