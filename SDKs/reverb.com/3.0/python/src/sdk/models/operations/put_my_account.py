from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PutMyAccountRequestBody:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    locale_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale_code') }})
    shipping_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_region_code') }})
    third_party_ad_data_consent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('third_party_ad_data_consent') }})
    

@dataclass
class PutMyAccountSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyAccountRequest:
    security: PutMyAccountSecurity = field()
    request: Optional[PutMyAccountRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutMyAccountResponse:
    content_type: str = field()
    status_code: int = field()
    
