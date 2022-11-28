from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PublishedWrittenQuestionQuestionTypeEnum(str, Enum):
    NAMED_DAY = "NamedDay"
    ORDINARY = "Ordinary"


@dataclass_json
@dataclass
class PublishedWrittenQuestion:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Answer') }})
    answered_when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnsweredWhen'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    answering_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnsweringBody') }})
    answering_body_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnsweringBodyId') }})
    answering_minister: Optional[MemberForDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnsweringMinister') }})
    answering_minister_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnsweringMinisterId') }})
    answering_minister_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnsweringMinisterTitle') }})
    asking_member: Optional[MemberForDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AskingMember') }})
    asking_member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AskingMemberId') }})
    due_for_answer: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DueForAnswer'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    question_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionText') }})
    question_type: Optional[PublishedWrittenQuestionQuestionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionType') }})
    tabled_when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TabledWhen'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UIN') }})
    
