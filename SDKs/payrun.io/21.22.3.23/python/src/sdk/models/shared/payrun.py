from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PayRunPayRunPayFrequencyEnum(str, Enum):
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    TWO_WEEKLY = "TwoWeekly"
    FOUR_WEEKLY = "FourWeekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class PayRunPayRunPaySchedule:
    r"""PayRunPayRunPaySchedule
    The pay runs' pay schedule
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class PayRunPayRunProceedingPayRun:
    r"""PayRunPayRunProceedingPayRun
    The pay runs' proceeding pay run
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class PayRunPayRun:
    executed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Executed'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_supplementary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsSupplementary') }})
    pay_frequency: Optional[PayRunPayRunPayFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayFrequency') }})
    pay_schedule: Optional[PayRunPayRunPaySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaySchedule') }})
    payment_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_end: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodEnd'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_start: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodStart'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    proceeding_pay_run: Optional[PayRunPayRunProceedingPayRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProceedingPayRun') }})
    sequence: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sequence') }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxPeriod') }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYear') }})
    

@dataclass_json
@dataclass
class PayRun:
    pay_run: Optional[PayRunPayRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRun') }})
    
