from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_CUSTOMER_PROFILE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class UpdateCustomerProfilePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerProfileUpdateCustomerProfileRequest:
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.CustomerProfileEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclass
class UpdateCustomerProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCustomerProfileRequest:
    path_params: UpdateCustomerProfilePathParams = field()
    security: UpdateCustomerProfileSecurity = field()
    request: Optional[UpdateCustomerProfileUpdateCustomerProfileRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateCustomerProfileResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_customer_profile: Optional[shared.TrusthubV1CustomerProfile] = field(default=None)
    
