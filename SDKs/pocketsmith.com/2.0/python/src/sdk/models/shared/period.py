from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Period:
    actual_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actual_amount') }})
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    forecast_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecast_amount') }})
    over_budget: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('over_budget') }})
    over_by: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('over_by') }})
    percentage_used: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage_used') }})
    refund_amound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refund_amound') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    under_budget: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('under_budget') }})
    under_by: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('under_by') }})
    
