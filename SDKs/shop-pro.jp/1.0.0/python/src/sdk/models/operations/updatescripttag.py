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
class UpdateScriptTagPathParams:
    script_tag_id: int = field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    
class UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class UpdateScriptTagRequestBodyScriptTag:
    display_scope: Optional[UpdateScriptTagRequestBodyScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    

@dataclass_json
@dataclass
class UpdateScriptTagRequestBody:
    script_tag: Optional[UpdateScriptTagRequestBodyScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class UpdateScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class UpdateScriptTag200ApplicationJSONScriptTag:
    display_scope: Optional[UpdateScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class UpdateScriptTag200ApplicationJSON:
    script_tag: Optional[UpdateScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class UpdateScriptTagRequest:
    path_params: UpdateScriptTagPathParams = field()
    security: UpdateScriptTagSecurity = field()
    request: Optional[UpdateScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    update_script_tag_200_application_json_object: Optional[UpdateScriptTag200ApplicationJSON] = field(default=None)
    
