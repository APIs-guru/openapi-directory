from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PayLinePayLinePayCodeTypePayCodeTypeEnum(str, Enum):
    NOT_SET = "NotSet"
    PAYMENT = "Payment"
    DEDUCTION = "Deduction"


@dataclass_json
@dataclass
class PayLinePayLinePayLine:
    calculator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Calculator' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Generated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pay_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayCode' }})
    pay_code_type: Optional[PayLinePayLinePayCodeTypePayCodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayCodeType' }})
    pay_run_sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRunSequence' }})
    payment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxPeriod' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    

@dataclass_json
@dataclass
class PayLine:
    pay_line: Optional[PayLinePayLinePayLine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayLine' }})
    
