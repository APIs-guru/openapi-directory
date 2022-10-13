from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetMenuSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMenuRequest:
    security: GetMenuSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetMenu200ApplicationJSONResult:
    childs: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childs' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetMenu200ApplicationJSON:
    result: Optional[List[GetMenu200ApplicationJSONResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetMenu401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetMenuResponse:
    content_type: str = field(default=None)
    get_menu_200_application_json_object: Optional[GetMenu200ApplicationJSON] = field(default=None)
    get_menu_401_application_json_object: Optional[GetMenu401ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
