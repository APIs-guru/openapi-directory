from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonthDetailResponseData:
    month: MonthDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    

@dataclass_json
@dataclass
class MonthDetailResponse:
    data: MonthDetailResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
