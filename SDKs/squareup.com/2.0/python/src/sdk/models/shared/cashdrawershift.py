from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money
from . import money
from . import money
from . import money
from . import money
from . import cashdrawerdevice
from . import money
from . import money


@dataclass_json
@dataclass
class CashDrawerShift:
    cash_paid_in_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_paid_in_money' }})
    cash_paid_out_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_paid_out_money' }})
    cash_payment_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_payment_money' }})
    cash_refunds_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash_refunds_money' }})
    closed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at' }})
    closed_cash_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_cash_money' }})
    closing_employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closing_employee_id' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device: Optional[cashdrawerdevice.CashDrawerDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    employee_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_ids' }})
    ended_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ended_at' }})
    ending_employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ending_employee_id' }})
    expected_cash_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expected_cash_money' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    opened_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opened_at' }})
    opened_cash_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opened_cash_money' }})
    opening_employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opening_employee_id' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
