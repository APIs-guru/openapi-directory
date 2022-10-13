from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutMyAccountRequestBody:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    locale_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale_code' }})
    shipping_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_region_code' }})
    third_party_ad_data_consent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'third_party_ad_data_consent' }})
    

@dataclass
class PutMyAccountSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyAccountRequest:
    request: Optional[PutMyAccountRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutMyAccountSecurity = field(default=None)
    

@dataclass
class PutMyAccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
