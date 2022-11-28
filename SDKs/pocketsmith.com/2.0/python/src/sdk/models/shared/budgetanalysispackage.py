from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BudgetAnalysisPackage:
    category: Optional[Category] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    expense: Optional[BudgetAnalysis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expense') }})
    income: Optional[BudgetAnalysis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('income') }})
    is_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_transfer') }})
    
