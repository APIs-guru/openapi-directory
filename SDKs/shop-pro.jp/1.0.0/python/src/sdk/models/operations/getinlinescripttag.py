from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetInlineScriptTagPathParams:
    inline_script_tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'inlineScriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInlineScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInlineScriptTagRequest:
    path_params: GetInlineScriptTagPathParams = field(default=None)
    security: GetInlineScriptTagSecurity = field(default=None)
    
class GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclass
class GetInlineScriptTag200ApplicationJSONInlineScriptTag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    display_scope: Optional[GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_scope' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make_date' }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_application_id' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    trigger_event: Optional[GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger_event' }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_date' }})
    

@dataclass_json
@dataclass
class GetInlineScriptTag200ApplicationJSON:
    inline_script_tag: Optional[GetInlineScriptTag200ApplicationJSONInlineScriptTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inline_script_tag' }})
    

@dataclass
class GetInlineScriptTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_inline_script_tag_200_application_json_object: Optional[GetInlineScriptTag200ApplicationJSON] = field(default=None)
    
