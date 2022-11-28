from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetInlineScriptTagsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclass
class GetInlineScriptTags200ApplicationJSONInlineScriptTags:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class GetInlineScriptTags200ApplicationJSON:
    inline_script_tags: Optional[List[GetInlineScriptTags200ApplicationJSONInlineScriptTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tags') }})
    

@dataclass
class GetInlineScriptTagsRequest:
    security: GetInlineScriptTagsSecurity = field()
    

@dataclass
class GetInlineScriptTagsResponse:
    content_type: str = field()
    status_code: int = field()
    get_inline_script_tags_200_application_json_object: Optional[GetInlineScriptTags200ApplicationJSON] = field(default=None)
    
