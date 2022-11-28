from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VenueContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class VenueContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    address_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressCountryCode') }})
    coordinates: Optional[OptionalGeoPointContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[VenueContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
