from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import optionalgeopointcontract
from . import weblinkcontract

class VenueContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class VenueContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    address_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressCountryCode' }})
    coordinates: Optional[optionalgeopointcontract.OptionalGeoPointContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coordinates' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[VenueContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[weblinkcontract.WebLinkContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    
