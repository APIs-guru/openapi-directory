from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class CreateShopScriptTagRequestBodyScriptTag:
    display_scope: Optional[CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrity' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    

@dataclass_json
@dataclass
class CreateShopScriptTagRequestBody:
    script_tag: Optional[CreateShopScriptTagRequestBodyScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class CreateShopScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateShopScriptTagRequest:
    request: Optional[CreateShopScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateShopScriptTagSecurity = field(default=None)
    
class CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class CreateShopScriptTag200ApplicationJSONScriptTag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    display_scope: Optional[CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrity' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_application_id' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class CreateShopScriptTag200ApplicationJSON:
    script_tag: Optional[CreateShopScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class CreateShopScriptTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_shop_script_tag_200_application_json_object: Optional[CreateShopScriptTag200ApplicationJSON] = field(default=None)
    
