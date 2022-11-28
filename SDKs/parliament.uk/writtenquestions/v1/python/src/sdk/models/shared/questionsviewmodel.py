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
class QuestionsViewModel:
    answer_is_correction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerIsCorrection') }})
    answer_is_holding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerIsHolding') }})
    answer_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerText') }})
    answering_body_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answeringBodyId') }})
    answering_body_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answeringBodyName') }})
    answering_member: Optional[MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answeringMember') }})
    answering_member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answeringMemberId') }})
    asking_member: Optional[MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('askingMember') }})
    asking_member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('askingMemberId') }})
    attachment_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentCount') }})
    attachments: Optional[List[AttachmentViewModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    comparable_answer_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparableAnswerText') }})
    correcting_member: Optional[MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctingMember') }})
    correcting_member_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctingMemberId') }})
    date_answer_corrected: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateAnswerCorrected'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_answered: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateAnswered'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_for_answer: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateForAnswer'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_holding_answer: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateHoldingAnswer'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_tabled: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTabled'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grouped_questions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupedQuestions') }})
    grouped_questions_dates: Optional[List[GroupedQuestionViewModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupedQuestionsDates') }})
    heading: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading') }})
    house: Optional[HouseEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('house') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_named_day: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isNamedDay') }})
    is_withdrawn: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isWithdrawn') }})
    member_has_interest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberHasInterest') }})
    original_answer_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalAnswerText') }})
    question_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionText') }})
    uin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uin') }})
    
