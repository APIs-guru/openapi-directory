from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Award:
    award_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('award_type') }})
    event_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recipient_list: List[AwardRecipient] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_list') }})
    year: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
