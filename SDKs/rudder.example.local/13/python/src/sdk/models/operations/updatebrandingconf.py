from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateBRandingConfRequest:
    request: shared.BrandingConf = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateBRandingConf200ApplicationJSONActionEnum(str, Enum):
    UPDATE_B_RANDING_CONF = "updateBRandingConf"


@dataclass_json
@dataclass
class UpdateBRandingConf200ApplicationJSONData:
    branding: shared.BrandingConf = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branding' }})
    
class UpdateBRandingConf200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateBRandingConf200ApplicationJSON:
    action: UpdateBRandingConf200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateBRandingConf200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateBRandingConf200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateBRandingConfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_b_randing_conf_200_application_json_object: Optional[UpdateBRandingConf200ApplicationJSON] = field(default=None)
    
