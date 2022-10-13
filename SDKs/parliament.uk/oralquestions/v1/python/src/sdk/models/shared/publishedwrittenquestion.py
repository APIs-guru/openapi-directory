from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import memberfordate
from . import memberfordate

class PublishedWrittenQuestionQuestionTypeEnum(str, Enum):
    NAMED_DAY = "NamedDay"
    ORDINARY = "Ordinary"


@dataclass_json
@dataclass
class PublishedWrittenQuestion:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Answer' }})
    answered_when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnsweredWhen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    answering_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnsweringBody' }})
    answering_body_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnsweringBodyId' }})
    answering_minister: Optional[memberfordate.MemberForDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnsweringMinister' }})
    answering_minister_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnsweringMinisterId' }})
    answering_minister_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnsweringMinisterTitle' }})
    asking_member: Optional[memberfordate.MemberForDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AskingMember' }})
    asking_member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AskingMemberId' }})
    due_for_answer: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DueForAnswer', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    question_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionText' }})
    question_type: Optional[PublishedWrittenQuestionQuestionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionType' }})
    tabled_when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TabledWhen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UIN' }})
    
