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
class GetShopScriptTagsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
class GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum(str, Enum):
    SHOP = "shop"
    THANKS_PAGE = "thanks_page"


@dataclass_json
@dataclass
class GetShopScriptTags200ApplicationJSONScriptTags:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    display_scope: Optional[GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_scope') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    integrity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrity') }})
    make_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make_date') }})
    oauth_application_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_application_id') }})
    src: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('src') }})
    update_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_date') }})
    

@dataclass_json
@dataclass
class GetShopScriptTags200ApplicationJSON:
    script_tags: Optional[List[GetShopScriptTags200ApplicationJSONScriptTags]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script_tags') }})
    

@dataclass
class GetShopScriptTagsRequest:
    security: GetShopScriptTagsSecurity = field()
    

@dataclass
class GetShopScriptTagsResponse:
    content_type: str = field()
    status_code: int = field()
    get_shop_script_tags_200_application_json_object: Optional[GetShopScriptTags200ApplicationJSON] = field(default=None)
    
