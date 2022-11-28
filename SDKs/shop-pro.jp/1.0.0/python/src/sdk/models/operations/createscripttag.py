from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class CreateScriptTagRequestBodyScriptTag:
    display_scope: Optional[CreateScriptTagRequestBodyScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    

@dataclass_json
@dataclass
class CreateScriptTagRequestBody:
    script_tag: Optional[CreateScriptTagRequestBodyScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class CreateScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class CreateScriptTag200ApplicationJSONScriptTag:
    display_scope: Optional[CreateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class CreateScriptTag200ApplicationJSON:
    script_tag: Optional[CreateScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class CreateScriptTagRequest:
    security: CreateScriptTagSecurity = field()
    request: Optional[CreateScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    create_script_tag_200_application_json_object: Optional[CreateScriptTag200ApplicationJSON] = field(default=None)
    
