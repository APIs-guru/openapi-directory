from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateInlineScriptTagPathParams:
    inline_script_tag_id: int = field(metadata={'path_param': { 'field_name': 'inlineScriptTagId', 'style': 'simple', 'explode': False }})
    
class UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclass
class UpdateInlineScriptTagRequestBodyInlineScriptTag:
    display_scope: Optional[UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    

@dataclass_json
@dataclass
class UpdateInlineScriptTagRequestBody:
    inline_script_tag: Optional[UpdateInlineScriptTagRequestBodyInlineScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tag') }})
    

@dataclass
class UpdateInlineScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class UpdateInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclass
class UpdateInlineScriptTag200ApplicationJSONInlineScriptTag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[UpdateInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class UpdateInlineScriptTag200ApplicationJSON:
    inline_script_tag: Optional[UpdateInlineScriptTag200ApplicationJSONInlineScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tag') }})
    

@dataclass
class UpdateInlineScriptTagRequest:
    path_params: UpdateInlineScriptTagPathParams = field()
    security: UpdateInlineScriptTagSecurity = field()
    request: Optional[UpdateInlineScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateInlineScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    update_inline_script_tag_200_application_json_object: Optional[UpdateInlineScriptTag200ApplicationJSON] = field(default=None)
    
