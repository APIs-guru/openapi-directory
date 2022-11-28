from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StatementsViewModel:
    answering_body_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answeringBodyId') }})
    answering_body_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answeringBodyName') }})
    attachments: Optional[List[AttachmentViewModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    date_made: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateMade'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    has_attachments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasAttachments') }})
    has_linked_statements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasLinkedStatements') }})
    house: Optional[HouseEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('house') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    linked_statements: Optional[List[LinkedStatements]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedStatements') }})
    member: Optional[MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberId') }})
    member_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberRole') }})
    notice_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noticeNumber') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    uin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uin') }})
    
