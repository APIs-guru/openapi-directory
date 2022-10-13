from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import category
from . import budgetanalysis
from . import budgetanalysis


@dataclass_json
@dataclass
class BudgetAnalysisPackage:
    category: Optional[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    expense: Optional[budgetanalysis.BudgetAnalysis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expense' }})
    income: Optional[budgetanalysis.BudgetAnalysis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'income' }})
    is_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_transfer' }})
    
