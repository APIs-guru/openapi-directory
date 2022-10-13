from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateScriptTagPathParams:
    script_tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    
class UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class UpdateScriptTagRequestBodyScriptTag:
    display_scope: Optional[UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    

@dataclass_json
@dataclass
class UpdateScriptTagRequestBody:
    script_tag: Optional[UpdateScriptTagRequestBodyScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class UpdateScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateScriptTagRequest:
    path_params: UpdateScriptTagPathParams = field(default=None)
    request: Optional[UpdateScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateScriptTagSecurity = field(default=None)
    
class UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class UpdateScriptTag200ApplicationJSONScriptTag:
    display_scope: Optional[UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class UpdateScriptTag200ApplicationJSON:
    script_tag: Optional[UpdateScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class UpdateScriptTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_script_tag_200_application_json_object: Optional[UpdateScriptTag200ApplicationJSON] = field(default=None)
    
