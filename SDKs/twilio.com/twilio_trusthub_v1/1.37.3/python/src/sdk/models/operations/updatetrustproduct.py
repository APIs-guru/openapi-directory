from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_TRUST_PRODUCT_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class UpdateTrustProductPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTrustProductUpdateTrustProductRequest:
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.TrustProductEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclass
class UpdateTrustProductSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTrustProductRequest:
    path_params: UpdateTrustProductPathParams = field()
    security: UpdateTrustProductSecurity = field()
    request: Optional[UpdateTrustProductUpdateTrustProductRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateTrustProductResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_trust_product: Optional[shared.TrusthubV1TrustProduct] = field(default=None)
    
