from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MemberForDate:
    constituency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Constituency') }})
    list_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ListAs') }})
    mnis_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MnisId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Party') }})
    party_colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyColour') }})
    party_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartyId') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhotoUrl') }})
    pims_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PimsId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
