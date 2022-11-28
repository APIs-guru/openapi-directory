from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclass
class CreateInlineScriptTagRequestBodyInlineScriptTag:
    display_scope: Optional[CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    

@dataclass_json
@dataclass
class CreateInlineScriptTagRequestBody:
    inline_script_tag: Optional[CreateInlineScriptTagRequestBodyInlineScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tag') }})
    

@dataclass
class CreateInlineScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    THANKS_PAGE = "thanks_page"
    CART = "cart"

class CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum(str, Enum):
    OBJECT_BUILDED = "object_builded"


@dataclass_json
@dataclass
class CreateInlineScriptTag201ApplicationJSONInlineScriptTag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    trigger_event: Optional[CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_event') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class CreateInlineScriptTag201ApplicationJSON:
    inline_script_tag: Optional[CreateInlineScriptTag201ApplicationJSONInlineScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline_script_tag') }})
    

@dataclass
class CreateInlineScriptTagRequest:
    security: CreateInlineScriptTagSecurity = field()
    request: Optional[CreateInlineScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInlineScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    create_inline_script_tag_201_application_json_object: Optional[CreateInlineScriptTag201ApplicationJSON] = field(default=None)
    
