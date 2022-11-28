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
class GetScriptTagPathParams:
    script_tag_id: int = field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    ALL = "all"
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"
    CART = "cart"


@dataclass_json
@dataclass
class GetScriptTag200ApplicationJSONScriptTag:
    display_scope: Optional[GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class GetScriptTag200ApplicationJSON:
    script_tag: Optional[GetScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class GetScriptTagRequest:
    path_params: GetScriptTagPathParams = field()
    security: GetScriptTagSecurity = field()
    

@dataclass
class GetScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    get_script_tag_200_application_json_object: Optional[GetScriptTag200ApplicationJSON] = field(default=None)
    
