from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayStatementSummary:
    r"""PayStatementSummary
    The pay statement summary model
    """
    
    auto_pay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoPay') }})
    begin_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beginDate') }})
    check_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkDate') }})
    check_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkNumber') }})
    direct_deposit_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDepositAmount') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    gross_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grossPay') }})
    hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours') }})
    net_check: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netCheck') }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netPay') }})
    overtime_dollars: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overtimeDollars') }})
    overtime_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overtimeHours') }})
    process: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('process') }})
    regular_dollars: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularDollars') }})
    regular_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    transaction_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionNumber') }})
    voucher_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucherNumber') }})
    workers_comp_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workersCompCode') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
