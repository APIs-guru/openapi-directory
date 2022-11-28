from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RtiJobInstructionRtiJobInstructionEmployer:
    r"""RtiJobInstructionRtiJobInstructionEmployer
    The rti job instructions' employer
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class RtiJobInstructionRtiJobInstructionLateReasonEnum(str, Enum):
    A = "A"
    B = "B"
    C = "C"
    D = "D"
    F = "F"
    G = "G"
    H = "H"


@dataclass_json
@dataclass
class RtiJobInstructionRtiJobInstructionPaySchedule:
    r"""RtiJobInstructionRtiJobInstructionPaySchedule
    The rti job instructions' pay schedule
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class RtiJobInstructionRtiJobInstructionRtiTransaction:
    r"""RtiJobInstructionRtiJobInstructionRtiTransaction
    The rti job instructions' rti transaction
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class RtiJobInstructionRtiJobInstruction:
    earlier_tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EarlierTaxYear') }})
    employer: Optional[RtiJobInstructionRtiJobInstructionEmployer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employer') }})
    final_submission_for_year: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalSubmissionForYear') }})
    generate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Generate') }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    late_reason: Optional[RtiJobInstructionRtiJobInstructionLateReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LateReason') }})
    no_payment_for_period_from: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoPaymentForPeriodFrom'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    no_payment_for_period_to: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoPaymentForPeriodTo'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pay_schedule: Optional[RtiJobInstructionRtiJobInstructionPaySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaySchedule') }})
    payment_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_of_inactivity_from: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodOfInactivityFrom'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_of_inactivity_to: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodOfInactivityTo'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rti_transaction: Optional[RtiJobInstructionRtiJobInstructionRtiTransaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RtiTransaction') }})
    rti_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RtiType') }})
    scheme_ceased: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeCeased'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxMonth') }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYear') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transmit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transmit') }})
    

@dataclass_json
@dataclass
class RtiJobInstruction:
    rti_job_instruction: Optional[RtiJobInstructionRtiJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RtiJobInstruction') }})
    
