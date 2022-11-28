from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DpsJobInstructionDpsJobInstructionEmployer:
    r"""DpsJobInstructionDpsJobInstructionEmployer
    The dps job instructions' employer
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class DpsJobInstructionDpsJobInstructionType:
    r"""DpsJobInstructionDpsJobInstructionType
    The dps job instructions' message types
    """
    
    type: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclass
class DpsJobInstructionDpsJobInstructionMessage:
    r"""DpsJobInstructionDpsJobInstructionMessage
    The dps job instructions' messages to process
    """
    
    message: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class DpsJobInstructionDpsJobInstruction:
    apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Apply') }})
    employer: Optional[DpsJobInstructionDpsJobInstructionEmployer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employer') }})
    from_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HoldingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_types: Optional[DpsJobInstructionDpsJobInstructionType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageTypes') }})
    messages_to_process: Optional[DpsJobInstructionDpsJobInstructionMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessagesToProcess') }})
    retrieve: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Retrieve') }})
    

@dataclass_json
@dataclass
class DpsJobInstruction:
    dps_job_instruction: Optional[DpsJobInstructionDpsJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DpsJobInstruction') }})
    
