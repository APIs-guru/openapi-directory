from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetInlineScriptTagsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInlineScriptTagsRequest:
    security: GetInlineScriptTagsSecurity = field(default=None)
    
class GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclass
class GetInlineScriptTags200ApplicationJSONInlineScriptTags:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    display_scope: Optional[GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_application_id' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    trigger_event: Optional[GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger_event' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class GetInlineScriptTags200ApplicationJSON:
    inline_script_tags: Optional[List[GetInlineScriptTags200ApplicationJSONInlineScriptTags]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inline_script_tags' }})
    

@dataclass
class GetInlineScriptTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_inline_script_tags_200_application_json_object: Optional[GetInlineScriptTags200ApplicationJSON] = field(default=None)
    
