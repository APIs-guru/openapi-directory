from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateCveCheckConfigurationRequestBody:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class UpdateCveCheckConfigurationRequest:
    request: Optional[UpdateCveCheckConfigurationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateCveCheckConfiguration200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CVE_CHECK_CONFIGURATION = "updateCVECheckConfiguration"


@dataclass_json
@dataclass
class UpdateCveCheckConfiguration200ApplicationJSONData:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class UpdateCveCheckConfiguration200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateCveCheckConfiguration200ApplicationJSON:
    action: UpdateCveCheckConfiguration200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateCveCheckConfiguration200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateCveCheckConfiguration200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateCveCheckConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_cve_check_configuration_200_application_json_object: Optional[UpdateCveCheckConfiguration200ApplicationJSON] = field(default=None)
    
