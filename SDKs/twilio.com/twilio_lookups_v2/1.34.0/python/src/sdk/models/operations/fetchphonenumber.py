from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_PHONE_NUMBER_SERVERS = [
	"https://lookups.twilio.com",
]


@dataclass
class FetchPhoneNumberPathParams:
    phone_number: str = field(default=None, metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPhoneNumberQueryParams:
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Fields', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchPhoneNumberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPhoneNumberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchPhoneNumberPathParams = field(default=None)
    query_params: FetchPhoneNumberQueryParams = field(default=None)
    security: FetchPhoneNumberSecurity = field(default=None)
    

@dataclass
class FetchPhoneNumberResponses:
    lookups_v2_phone_number: Optional[shared.LookupsV2PhoneNumber] = field(default=None)
    

@dataclass
class FetchPhoneNumberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchPhoneNumberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
