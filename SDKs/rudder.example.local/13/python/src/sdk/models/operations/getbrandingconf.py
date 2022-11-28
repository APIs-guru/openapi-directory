from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetBrandingConf200ApplicationJSONActionEnum(str, Enum):
    GET_BRANDING_CONF = "getBrandingConf"


@dataclass_json
@dataclass
class GetBrandingConf200ApplicationJSONData:
    branding: shared.BrandingConf = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branding') }})
    
class GetBrandingConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetBrandingConf200ApplicationJSON:
    action: GetBrandingConf200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetBrandingConf200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetBrandingConf200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetBrandingConfResponse:
    content_type: str = field()
    status_code: int = field()
    get_branding_conf_200_application_json_object: Optional[GetBrandingConf200ApplicationJSON] = field(default=None)
    
