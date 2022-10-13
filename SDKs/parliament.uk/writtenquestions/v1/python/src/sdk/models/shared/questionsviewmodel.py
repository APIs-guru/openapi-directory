from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import memberviewmodel
from . import memberviewmodel
from . import attachmentviewmodel
from . import memberviewmodel
from . import groupedquestionviewmodel
from . import houseenum_enum


@dataclass_json
@dataclass
class QuestionsViewModel:
    answer_is_correction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerIsCorrection' }})
    answer_is_holding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerIsHolding' }})
    answer_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerText' }})
    answering_body_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answeringBodyId' }})
    answering_body_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answeringBodyName' }})
    answering_member: Optional[memberviewmodel.MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answeringMember' }})
    answering_member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answeringMemberId' }})
    asking_member: Optional[memberviewmodel.MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'askingMember' }})
    asking_member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'askingMemberId' }})
    attachment_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentCount' }})
    attachments: Optional[List[attachmentviewmodel.AttachmentViewModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    comparable_answer_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparableAnswerText' }})
    correcting_member: Optional[memberviewmodel.MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctingMember' }})
    correcting_member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctingMemberId' }})
    date_answer_corrected: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateAnswerCorrected', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_answered: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateAnswered', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_for_answer: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateForAnswer', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_holding_answer: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateHoldingAnswer', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_tabled: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTabled', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grouped_questions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupedQuestions' }})
    grouped_questions_dates: Optional[List[groupedquestionviewmodel.GroupedQuestionViewModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupedQuestionsDates' }})
    heading: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heading' }})
    house: Optional[houseenum_enum.HouseEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_named_day: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNamedDay' }})
    is_withdrawn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isWithdrawn' }})
    member_has_interest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberHasInterest' }})
    original_answer_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalAnswerText' }})
    question_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionText' }})
    uin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uin' }})
    
