from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PayRunPayRunPayFrequencyPayFrequencyEnum(str, Enum):
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    TWO_WEEKLY = "TwoWeekly"
    FOUR_WEEKLY = "FourWeekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class PayRunPayRunPaySchedulePaySchedule:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class PayRunPayRunProceedingPayRunProceedingPayRun:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class PayRunPayRunPayRun:
    executed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Executed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_supplementary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsSupplementary' }})
    pay_frequency: Optional[PayRunPayRunPayFrequencyPayFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayFrequency' }})
    pay_schedule: Optional[PayRunPayRunPaySchedulePaySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaySchedule' }})
    payment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeriodEnd', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeriodStart', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    proceeding_pay_run: Optional[PayRunPayRunProceedingPayRunProceedingPayRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProceedingPayRun' }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sequence' }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxPeriod' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    

@dataclass_json
@dataclass
class PayRun:
    pay_run: Optional[PayRunPayRunPayRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRun' }})
    
