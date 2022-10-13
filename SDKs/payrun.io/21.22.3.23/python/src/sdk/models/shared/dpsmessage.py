from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DpsMessageDpsMessageMessageStatusMessageStatusEnum(str, Enum):
    RETRIEVED = "Retrieved"
    APPLIED = "Applied"
    UNRESOLVED = "Unresolved"
    IGNORED = "Ignored"
    INFORMATION = "Information"


@dataclass_json
@dataclass
class DpsMessageDpsMessageDpsMessage:
    form_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FormType' }})
    issue_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    message_status: Optional[DpsMessageDpsMessageMessageStatusMessageStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageStatus' }})
    message_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageType' }})
    processing_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingResult' }})
    retrieve_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetrieveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sequence_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumber' }})
    

@dataclass_json
@dataclass
class DpsMessage:
    dps_message: Optional[DpsMessageDpsMessageDpsMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DpsMessage' }})
    
