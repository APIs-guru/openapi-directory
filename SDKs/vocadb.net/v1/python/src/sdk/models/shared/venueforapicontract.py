from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VenueForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class VenueForAPIContractInput:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    address_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressCountryCode') }})
    coordinates: Optional[OptionalGeoPointContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    events: Optional[List[ReleaseEventContractInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    status: Optional[VenueForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    

@dataclass_json
@dataclass
class VenueForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    address_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressCountryCode') }})
    coordinates: Optional[OptionalGeoPointContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    events: Optional[List[ReleaseEventContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    status: Optional[VenueForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
