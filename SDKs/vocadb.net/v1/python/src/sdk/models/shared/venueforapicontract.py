from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import optionalgeopointcontract
from . import releaseeventcontract
from . import localizedstringcontract
from . import weblinkforapicontract

class VenueForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class VenueForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    address_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressCountryCode' }})
    coordinates: Optional[optionalgeopointcontract.OptionalGeoPointContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: Optional[List[releaseeventcontract.ReleaseEventContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    names: Optional[List[localizedstringcontract.LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    status: Optional[VenueForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[weblinkforapicontract.WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    
