from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import creditdebitindicator_enum


@dataclass_json
@dataclass
class StatementLine:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    cheque_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chequeNumber' }})
    credit_debit_indicator: Optional[creditdebitindicator_enum.CreditDebitIndicatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditDebitIndicator' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    payee_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeName' }})
    posted_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    
