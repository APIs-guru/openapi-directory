from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class CreateShopScriptTagRequestBodyScriptTag:
    display_scope: Optional[CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    

@dataclass_json
@dataclass
class CreateShopScriptTagRequestBody:
    script_tag: Optional[CreateShopScriptTagRequestBodyScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class CreateShopScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class CreateShopScriptTag200ApplicationJSONScriptTag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class CreateShopScriptTag200ApplicationJSON:
    script_tag: Optional[CreateShopScriptTag200ApplicationJSONScriptTag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tag') }})
    

@dataclass
class CreateShopScriptTagRequest:
    security: CreateShopScriptTagSecurity = field()
    request: Optional[CreateShopScriptTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateShopScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    create_shop_script_tag_200_application_json_object: Optional[CreateShopScriptTag200ApplicationJSON] = field(default=None)
    
