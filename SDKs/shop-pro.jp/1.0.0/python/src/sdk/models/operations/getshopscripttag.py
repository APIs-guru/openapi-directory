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
class GetShopScriptTagPathParams:
    script_tag_id: int = field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class GetShopScriptTag200ApplicationJSONScriptTag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class GetShopScriptTag200ApplicationJSON:
    script_tag: Optional[GetShopScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class GetShopScriptTagRequest:
    path_params: GetShopScriptTagPathParams = field()
    security: GetShopScriptTagSecurity = field()
    

@dataclass
class GetShopScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    get_shop_script_tag_200_application_json_object: Optional[GetShopScriptTag200ApplicationJSON] = field(default=None)
    
