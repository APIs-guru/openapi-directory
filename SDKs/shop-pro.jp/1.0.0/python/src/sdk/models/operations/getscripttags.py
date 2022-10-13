from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetScriptTagsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetScriptTagsRequest:
    security: GetScriptTagsSecurity = field(default=None)
    
class GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class GetScriptTags200ApplicationJSONScriptTags:
    display_scope: Optional[GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'src' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class GetScriptTags200ApplicationJSON:
    script_tags: Optional[List[GetScriptTags200ApplicationJSONScriptTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script_tags' }})
    

@dataclass
class GetScriptTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_script_tags_200_application_json_object: Optional[GetScriptTags200ApplicationJSON] = field(default=None)
    
