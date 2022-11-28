from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SlideViewModelSoundToPlayEnum(str, Enum):
    NEW_SLIDE = "NewSlide"
    DIVISION_BELL = "DivisionBell"
    ALERT = "Alert"
    GENERIC_BEEP = "GenericBeep"

class SlideViewModelTypeEnum(str, Enum):
    DEBATE = "Debate"
    DIVISION = "Division"
    ORAL_QUESTION_TIME = "OralQuestionTime"
    URGENT_QUESTION = "UrgentQuestion"
    STATEMENT = "Statement"
    PRAYERS = "Prayers"
    HOUSE_RISEN = "HouseRisen"
    GENERIC = "Generic"
    NOT_SITTING = "NotSitting"
    PRIME_MINISTERS_QUESTIONS = "PrimeMinistersQuestions"
    POINTS_OF_ORDER = "PointsOfOrder"
    BLANK_SLIDE = "BlankSlide"


@dataclass_json
@dataclass
class SlideViewModel:
    carousel_display_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carouselDisplaySeconds') }})
    carousel_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carouselOrder') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lines: Optional[List[LineViewModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    slide_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slideTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sound_to_play: Optional[SlideViewModelSoundToPlayEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soundToPlay') }})
    speaker_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speakerTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[SlideViewModelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
