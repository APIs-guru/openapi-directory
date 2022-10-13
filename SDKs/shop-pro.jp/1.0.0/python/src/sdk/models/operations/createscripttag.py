from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreateScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class CreateScriptTagRequestBodyScriptTag:
    display_scope: Optional[CreateScriptTagRequestBodyScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    

@dataclass_json
@dataclass
class CreateScriptTagRequestBody:
    script_tag: Optional[CreateScriptTagRequestBodyScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class CreateScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateScriptTagRequest:
    request: Optional[CreateScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateScriptTagSecurity = field(default=None)
    
class CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class CreateScriptTag200ApplicationJSONScriptTag:
    display_scope: Optional[CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class CreateScriptTag200ApplicationJSON:
    script_tag: Optional[CreateScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class CreateScriptTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_script_tag_200_application_json_object: Optional[CreateScriptTag200ApplicationJSON] = field(default=None)
    
