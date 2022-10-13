from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetScriptTagPathParams:
    script_tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetScriptTagRequest:
    path_params: GetScriptTagPathParams = field(default=None)
    security: GetScriptTagSecurity = field(default=None)
    
class GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class GetScriptTag200ApplicationJSONScriptTag:
    display_scope: Optional[GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class GetScriptTag200ApplicationJSON:
    script_tag: Optional[GetScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class GetScriptTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_script_tag_200_application_json_object: Optional[GetScriptTag200ApplicationJSON] = field(default=None)
    
