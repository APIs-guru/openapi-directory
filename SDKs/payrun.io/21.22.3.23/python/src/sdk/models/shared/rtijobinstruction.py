from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RtiJobInstructionRtiJobInstructionEmployerEmployer:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    
class RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum(str, Enum):
    A = "A"
    B = "B"
    C = "C"
    D = "D"
    F = "F"
    G = "G"
    H = "H"


@dataclass_json
@dataclass
class RtiJobInstructionRtiJobInstructionPaySchedulePaySchedule:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class RtiJobInstructionRtiJobInstructionRtiTransactionRtiTransaction:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class RtiJobInstructionRtiJobInstructionRtiJobInstruction:
    earlier_tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EarlierTaxYear' }})
    employer: Optional[RtiJobInstructionRtiJobInstructionEmployerEmployer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employer' }})
    final_submission_for_year: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalSubmissionForYear' }})
    generate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Generate' }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    late_reason: Optional[RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LateReason' }})
    no_payment_for_period_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoPaymentForPeriodFrom', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    no_payment_for_period_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoPaymentForPeriodTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pay_schedule: Optional[RtiJobInstructionRtiJobInstructionPaySchedulePaySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaySchedule' }})
    payment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_of_inactivity_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeriodOfInactivityFrom', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    period_of_inactivity_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeriodOfInactivityTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rti_transaction: Optional[RtiJobInstructionRtiJobInstructionRtiTransactionRtiTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RtiTransaction' }})
    rti_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RtiType' }})
    scheme_ceased: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeCeased', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tax_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxMonth' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transmit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transmit' }})
    

@dataclass_json
@dataclass
class RtiJobInstruction:
    rti_job_instruction: Optional[RtiJobInstructionRtiJobInstructionRtiJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RtiJobInstruction' }})
    
