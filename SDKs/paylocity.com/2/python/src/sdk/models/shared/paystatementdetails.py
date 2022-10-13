from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayStatementDetails:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    check_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkDate' }})
    det: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'det' }})
    det_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detCode' }})
    det_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detType' }})
    eligible_compensation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligibleCompensation' }})
    hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hours' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    transaction_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionNumber' }})
    transaction_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionType' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
