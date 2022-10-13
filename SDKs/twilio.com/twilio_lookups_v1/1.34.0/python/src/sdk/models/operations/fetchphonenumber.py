from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared
FETCH_PHONE_NUMBER_SERVERS = [
	"https://lookups.twilio.com",
]


@dataclass
class FetchPhoneNumberPathParams:
    phone_number: str = field(default=None, metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPhoneNumberQueryParams:
    add_ons: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddOns', 'style': 'form', 'explode': True }})
    add_ons_data: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'AddOnsData', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

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
    lookups_v1_phone_number: Optional[shared.LookupsV1PhoneNumber] = field(default=None)
    

@dataclass
class FetchPhoneNumberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchPhoneNumberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
