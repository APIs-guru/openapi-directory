from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LineViewModelContentTypeEnum(str, Enum):
    GENERIC = "Generic"
    MEMBER = "Member"
    ORAL_QUESTION_TIME = "OralQuestionTime"
    ANSWERING_BODY = "AnsweringBody"
    BILL = "Bill"

class LineViewModelHorizontalAlignmentEnum(str, Enum):
    LEFT = "Left"
    RIGHT = "Right"
    CENTRE = "Centre"

class LineViewModelStyleEnum(str, Enum):
    DIVIDER_SOLID = "DividerSolid"
    EMPTY_LINE = "EmptyLine"
    MEMBER = "Member"
    FOOTER = "Footer"
    ANSWERING_BODY = "AnsweringBody"
    WESTMINSTER_HALL_INFO = "WestminsterHallInfo"
    GRAND_COMMITTEE_INFO = "GrandCommitteeInfo"
    DIVIDER_DOTTED = "DividerDotted"
    DIVIDER_DASHED = "DividerDashed"
    DIVISION = "Division"
    TEXT150 = "Text150"
    TEXT140 = "Text140"
    TEXT130 = "Text130"
    TEXT120 = "Text120"
    TEXT110 = "Text110"
    TEXT100 = "Text100"
    TEXT90 = "Text90"
    TEXT80 = "Text80"
    TEXT70 = "Text70"

class LineViewModelVerticalAlignmentEnum(str, Enum):
    TOP = "Top"
    MIDDLE = "Middle"
    BOTTOM = "Bottom"


@dataclass_json
@dataclass
class LineViewModel:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    content_additional_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAdditionalJson') }})
    content_type: Optional[LineViewModelContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUrl') }})
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayOrder') }})
    force_capitalisation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceCapitalisation') }})
    horizontal_alignment: Optional[LineViewModelHorizontalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalAlignment') }})
    member: Optional[MemberViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    style: Optional[LineViewModelStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    vertical_alignment: Optional[LineViewModelVerticalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verticalAlignment') }})
    
