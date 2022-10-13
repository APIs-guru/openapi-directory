from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attachmentviewmodel
from . import houseenum_enum
from . import linkedstatements
from . import memberviewmodel


@dataclass_json
@dataclass
class StatementsViewModel:
    answering_body_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answeringBodyId' }})
    answering_body_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answeringBodyName' }})
    attachments: Optional[List[attachmentviewmodel.AttachmentViewModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    date_made: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateMade', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    has_attachments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasAttachments' }})
    has_linked_statements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasLinkedStatements' }})
    house: Optional[houseenum_enum.HouseEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    linked_statements: Optional[List[linkedstatements.LinkedStatements]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedStatements' }})
    member: Optional[memberviewmodel.MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberId' }})
    member_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberRole' }})
    notice_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noticeNumber' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    uin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uin' }})
    
