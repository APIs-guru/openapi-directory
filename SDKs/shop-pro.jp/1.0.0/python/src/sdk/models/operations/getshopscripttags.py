from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetShopScriptTagsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopScriptTagsRequest:
    security: GetShopScriptTagsSecurity = field(default=None)
    
class GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class GetShopScriptTags200ApplicationJSONScriptTags:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    display_scope: Optional[GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrity' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_application_id' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class GetShopScriptTags200ApplicationJSON:
    script_tags: Optional[List[GetShopScriptTags200ApplicationJSONScriptTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tags' }})
    

@dataclass
class GetShopScriptTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_shop_script_tags_200_application_json_object: Optional[GetShopScriptTags200ApplicationJSON] = field(default=None)
    
