from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DpsMessageDpsMessageMessageStatusEnum(str, Enum):
    RETRIEVED = "Retrieved"
    APPLIED = "Applied"
    UNRESOLVED = "Unresolved"
    IGNORED = "Ignored"
    INFORMATION = "Information"


@dataclass_json
@dataclass
class DpsMessageDpsMessage:
    form_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FormType') }})
    issue_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssueDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    message_status: Optional[DpsMessageDpsMessageMessageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageStatus') }})
    message_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageType') }})
    processing_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingResult') }})
    retrieve_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetrieveDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sequence_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SequenceNumber') }})
    

@dataclass_json
@dataclass
class DpsMessage:
    dps_message: Optional[DpsMessageDpsMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DpsMessage') }})
    
