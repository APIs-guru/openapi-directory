from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MemberViewModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    list_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listAs') }})
    member_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberFrom') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    party_abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partyAbbreviation') }})
    party_colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partyColour') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUrl') }})
    
