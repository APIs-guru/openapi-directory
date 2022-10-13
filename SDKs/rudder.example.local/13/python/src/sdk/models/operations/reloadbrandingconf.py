from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ReloadBrandingConf200ApplicationJSONActionEnum(str, Enum):
    GET_BRANDING_CONF = "getBrandingConf"


@dataclass_json
@dataclass
class ReloadBrandingConf200ApplicationJSONData:
    branding: shared.BrandingConf = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branding' }})
    
class ReloadBrandingConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadBrandingConf200ApplicationJSON:
    action: ReloadBrandingConf200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ReloadBrandingConf200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadBrandingConf200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadBrandingConfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reload_branding_conf_200_application_json_object: Optional[ReloadBrandingConf200ApplicationJSON] = field(default=None)
    
