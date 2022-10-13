from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayRunJobInstructionPayRunJobInstructionEmployeesEmployee:
    employee: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employee' }})
    

@dataclass_json
@dataclass
class PayRunJobInstructionPayRunJobInstructionPaySchedulePaySchedule:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class PayRunJobInstructionPayRunJobInstructionPayRunJobInstruction:
    employees: Optional[PayRunJobInstructionPayRunJobInstructionEmployeesEmployee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employees' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_supplementary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsSupplementary' }})
    pay_schedule: Optional[PayRunJobInstructionPayRunJobInstructionPaySchedulePaySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaySchedule' }})
    payment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class PayRunJobInstruction:
    pay_run_job_instruction: Optional[PayRunJobInstructionPayRunJobInstructionPayRunJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRunJobInstruction' }})
    
