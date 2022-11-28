from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateAddressPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAddressCreateAddressRequest:
    city: str = field(metadata={'form': { 'field_name': 'City' }})
    customer_name: str = field(metadata={'form': { 'field_name': 'CustomerName' }})
    iso_country: str = field(metadata={'form': { 'field_name': 'IsoCountry' }})
    postal_code: str = field(metadata={'form': { 'field_name': 'PostalCode' }})
    region: str = field(metadata={'form': { 'field_name': 'Region' }})
    street: str = field(metadata={'form': { 'field_name': 'Street' }})
    auto_correct_address: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AutoCorrectAddress' }})
    emergency_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EmergencyEnabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAddressRequest:
    path_params: CreateAddressPathParams = field()
    security: CreateAddressSecurity = field()
    request: Optional[CreateAddressCreateAddressRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateAddressResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_address: Optional[shared.APIV2010AccountAddress] = field(default=None)
    
