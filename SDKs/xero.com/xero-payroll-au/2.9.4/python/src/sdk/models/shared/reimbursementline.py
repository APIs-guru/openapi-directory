from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReimbursementLine:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    expense_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpenseAccount' }})
    reimbursement_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReimbursementTypeID' }})
    
