from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateShopScriptTagPathParams:
    script_tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    
class UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class UpdateShopScriptTagRequestBodyScriptTag:
    display_scope: Optional[UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrity' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    

@dataclass_json
@dataclass
class UpdateShopScriptTagRequestBody:
    script_tag: Optional[UpdateShopScriptTagRequestBodyScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class UpdateShopScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateShopScriptTagRequest:
    path_params: UpdateShopScriptTagPathParams = field(default=None)
    request: Optional[UpdateShopScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateShopScriptTagSecurity = field(default=None)
    
class UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class UpdateShopScriptTag200ApplicationJSONScriptTag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    display_scope: Optional[UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrity' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_application_id' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class UpdateShopScriptTag200ApplicationJSON:
    script_tag: Optional[UpdateShopScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tag' }})
    

@dataclass
class UpdateShopScriptTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_shop_script_tag_200_application_json_object: Optional[UpdateShopScriptTag200ApplicationJSON] = field(default=None)
    
