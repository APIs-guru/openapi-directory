from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PayLinePayLinePayCodeTypeEnum(str, Enum):
    NOT_SET = "NotSet"
    PAYMENT = "Payment"
    DEDUCTION = "Deduction"


@dataclass_json
@dataclass
class PayLinePayLine:
    calculator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Calculator') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Generated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pay_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayCode') }})
    pay_code_type: Optional[PayLinePayLinePayCodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayCodeType') }})
    pay_run_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunSequence') }})
    payment_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxPeriod') }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYear') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    

@dataclass_json
@dataclass
class PayLine:
    pay_line: Optional[PayLinePayLine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayLine') }})
    
