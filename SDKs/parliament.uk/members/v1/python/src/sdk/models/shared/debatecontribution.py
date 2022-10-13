from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DebateContribution:
    answer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerCount' }})
    debate_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debateId' }})
    debate_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debateTitle' }})
    debate_website_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debateWebsiteId' }})
    first_timecode: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstTimecode', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    house: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    intervention_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interventionCount' }})
    points_of_order_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointsOfOrderCount' }})
    question_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionCount' }})
    section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    sitting_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sittingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    speech_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechCount' }})
    statements_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statementsCount' }})
    supplementary_question_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplementaryQuestionCount' }})
    total_contributions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalContributions' }})
    
