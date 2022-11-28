from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


FETCH_PHONE_NUMBER_SERVERS = [
	"https://lookups.twilio.com",
]


@dataclass
class FetchPhoneNumberPathParams:
    phone_number: str = field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPhoneNumberQueryParams:
    add_ons: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddOns', 'style': 'form', 'explode': True }})
    add_ons_data: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'AddOnsData', 'style': 'form', 'explode': True }})
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CountryCode', 'style': 'form', 'explode': True }})
    type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

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
    lookups_v1_phone_number: Optional[shared.LookupsV1PhoneNumber] = field(default=None)
    
