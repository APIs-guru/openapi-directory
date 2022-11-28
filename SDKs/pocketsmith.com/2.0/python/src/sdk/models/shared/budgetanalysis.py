from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BudgetAnalysis:
    average_actual_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average_actual_amount') }})
    average_forecast_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average_forecast_amount') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    periods: Optional[List[Period]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periods') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    total_actual_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_actual_amount') }})
    total_forecast_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_forecast_amount') }})
    total_over_by: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_over_by') }})
    total_under_by: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_under_by') }})
    
