from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateAddressPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAddressUpdateAddressRequest:
    auto_correct_address: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AutoCorrectAddress' }})
    city: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'City' }})
    customer_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CustomerName' }})
    emergency_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EmergencyEnabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    postal_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PostalCode' }})
    region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Region' }})
    street: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Street' }})
    

@dataclass
class UpdateAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAddressRequest:
    path_params: UpdateAddressPathParams = field()
    security: UpdateAddressSecurity = field()
    request: Optional[UpdateAddressUpdateAddressRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateAddressResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_address: Optional[shared.APIV2010AccountAddress] = field(default=None)
    
