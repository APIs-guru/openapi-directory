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
class UpdateShopScriptTagPathParams:
    script_tag_id: int = field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    
class UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class UpdateShopScriptTagRequestBodyScriptTag:
    display_scope: Optional[UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    

@dataclass_json
@dataclass
class UpdateShopScriptTagRequestBody:
    script_tag: Optional[UpdateShopScriptTagRequestBodyScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class UpdateShopScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class UpdateShopScriptTag200ApplicationJSONScriptTag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class UpdateShopScriptTag200ApplicationJSON:
    script_tag: Optional[UpdateShopScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class UpdateShopScriptTagRequest:
    path_params: UpdateShopScriptTagPathParams = field()
    security: UpdateShopScriptTagSecurity = field()
    request: Optional[UpdateShopScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateShopScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    update_shop_script_tag_200_application_json_object: Optional[UpdateShopScriptTag200ApplicationJSON] = field(default=None)
    
