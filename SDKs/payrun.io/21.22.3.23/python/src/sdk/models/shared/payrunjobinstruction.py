from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayRunJobInstructionPayRunJobInstructionEmployee:
    r"""PayRunJobInstructionPayRunJobInstructionEmployee
    The pay run job instructions' employees
    """
    
    employee: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employee') }})
    

@dataclass_json
@dataclass
class PayRunJobInstructionPayRunJobInstructionPaySchedule:
    r"""PayRunJobInstructionPayRunJobInstructionPaySchedule
    The pay run job instructions' pay schedule
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class PayRunJobInstructionPayRunJobInstruction:
    employees: Optional[PayRunJobInstructionPayRunJobInstructionEmployee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employees') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_supplementary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsSupplementary') }})
    pay_schedule: Optional[PayRunJobInstructionPayRunJobInstructionPaySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaySchedule') }})
    payment_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class PayRunJobInstruction:
    pay_run_job_instruction: Optional[PayRunJobInstructionPayRunJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRunJobInstruction') }})
    
