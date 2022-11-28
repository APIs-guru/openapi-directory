from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIStatus:
    android: APIStatusAppVersion = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('android') }})
    current_season: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_season') }})
    down_events: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('down_events') }})
    ios: APIStatusAppVersion = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ios') }})
    is_datafeed_down: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_datafeed_down') }})
    max_season: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_season') }})
    
