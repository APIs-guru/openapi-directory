from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayStatementDetails:
    r"""PayStatementDetails
    The pay statement details model
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    check_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkDate') }})
    det: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('det') }})
    det_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detCode') }})
    det_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detType') }})
    eligible_compensation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibleCompensation') }})
    hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    transaction_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionNumber') }})
    transaction_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionType') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
