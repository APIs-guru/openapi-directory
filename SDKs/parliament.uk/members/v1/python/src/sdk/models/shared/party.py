from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Party:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abbreviation') }})
    background_colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColour') }})
    foreground_colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColour') }})
    government_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('governmentType') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_independent_party: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isIndependentParty') }})
    is_lords_main_party: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLordsMainParty') }})
    is_lords_spiritual_party: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLordsSpiritualParty') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
