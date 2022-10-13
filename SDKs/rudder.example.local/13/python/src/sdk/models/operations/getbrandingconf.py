from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetBrandingConf200ApplicationJSONActionEnum(str, Enum):
    GET_BRANDING_CONF = "getBrandingConf"


@dataclass_json
@dataclass
class GetBrandingConf200ApplicationJSONData:
    branding: shared.BrandingConf = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branding' }})
    
class GetBrandingConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetBrandingConf200ApplicationJSON:
    action: GetBrandingConf200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetBrandingConf200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetBrandingConf200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetBrandingConfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_branding_conf_200_application_json_object: Optional[GetBrandingConf200ApplicationJSON] = field(default=None)
    
