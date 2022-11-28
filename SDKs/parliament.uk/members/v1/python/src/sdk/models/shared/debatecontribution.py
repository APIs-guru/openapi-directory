from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DebateContribution:
    answer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerCount') }})
    debate_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debateId') }})
    debate_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debateTitle') }})
    debate_website_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debateWebsiteId') }})
    first_timecode: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstTimecode'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    house: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('house') }})
    intervention_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interventionCount') }})
    points_of_order_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointsOfOrderCount') }})
    question_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionCount') }})
    section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    sitting_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sittingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    speech_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechCount') }})
    statements_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statementsCount') }})
    supplementary_question_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplementaryQuestionCount') }})
    total_contributions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalContributions') }})
    
