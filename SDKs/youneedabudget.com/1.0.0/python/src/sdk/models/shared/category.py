from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CategoryGoalTypeEnum(str, Enum):
    TB = "TB"
    TBD = "TBD"
    MF = "MF"
    NEED = "NEED"


@dataclass_json
@dataclass
class Category:
    activity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    balance: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    budgeted: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budgeted' }})
    category_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_group_id' }})
    deleted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    goal_creation_month: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_creation_month', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    goal_months_to_budget: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_months_to_budget' }})
    goal_overall_funded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_overall_funded' }})
    goal_overall_left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_overall_left' }})
    goal_percentage_complete: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_percentage_complete' }})
    goal_target: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_target' }})
    goal_target_month: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_target_month', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    goal_type: Optional[CategoryGoalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_type' }})
    goal_under_funded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal_under_funded' }})
    hidden: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    original_category_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_category_group_id' }})
    
