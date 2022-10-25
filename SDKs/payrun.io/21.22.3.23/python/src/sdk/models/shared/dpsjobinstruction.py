from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DpsJobInstructionDpsJobInstructionEmployer:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class DpsJobInstructionDpsJobInstructionType:
    type: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class DpsJobInstructionDpsJobInstructionMessage:
    message: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class DpsJobInstructionDpsJobInstruction:
    apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Apply' }})
    employer: Optional[DpsJobInstructionDpsJobInstructionEmployer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employer' }})
    from_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_types: Optional[DpsJobInstructionDpsJobInstructionType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageTypes' }})
    messages_to_process: Optional[DpsJobInstructionDpsJobInstructionMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessagesToProcess' }})
    retrieve: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Retrieve' }})
    

@dataclass_json
@dataclass
class DpsJobInstruction:
    dps_job_instruction: Optional[DpsJobInstructionDpsJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DpsJobInstruction' }})
    
