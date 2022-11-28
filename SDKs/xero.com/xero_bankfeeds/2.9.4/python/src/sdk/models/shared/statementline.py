from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StatementLine:
    r"""StatementLine
    the lines details for a statement
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    cheque_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chequeNumber') }})
    credit_debit_indicator: Optional[CreditDebitIndicatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditDebitIndicator') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeName') }})
    posted_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postedDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
