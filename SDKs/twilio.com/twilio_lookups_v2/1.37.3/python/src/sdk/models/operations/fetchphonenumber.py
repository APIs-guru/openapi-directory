from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_PHONE_NUMBER_SERVERS = [
	"https://lookups.twilio.com",
]


@dataclass
class FetchPhoneNumberPathParams:
    phone_number: str = field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPhoneNumberQueryParams:
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Fields', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPhoneNumberRequest:
    path_params: FetchPhoneNumberPathParams = field()
    query_params: FetchPhoneNumberQueryParams = field()
    security: FetchPhoneNumberSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchPhoneNumberResponse:
    content_type: str = field()
    status_code: int = field()
    lookups_v2_phone_number: Optional[shared.LookupsV2PhoneNumber] = field(default=None)
    
