from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CategoryGoalTypeEnum(str, Enum):
    TB = "TB"
    TBD = "TBD"
    MF = "MF"
    NEED = "NEED"


@dataclass_json
@dataclass
class Category:
    activity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    balance: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    budgeted: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('budgeted') }})
    category_group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category_group_id') }})
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    hidden: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    goal_creation_month: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_creation_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    goal_months_to_budget: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_months_to_budget') }})
    goal_overall_funded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_overall_funded') }})
    goal_overall_left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_overall_left') }})
    goal_percentage_complete: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_percentage_complete') }})
    goal_target: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_target') }})
    goal_target_month: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_target_month'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    goal_type: Optional[CategoryGoalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_type') }})
    goal_under_funded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal_under_funded') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    original_category_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_category_group_id') }})
    
