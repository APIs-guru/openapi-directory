from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class UpdateBundlePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBundleUpdateBundleRequest:
    email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Email' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.BundleEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    status_callback: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'StatusCallback' }})
    

@dataclass
class UpdateBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateBundleRequest:
    path_params: UpdateBundlePathParams = field()
    security: UpdateBundleSecurity = field()
    request: Optional[UpdateBundleUpdateBundleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateBundleResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_bundle: Optional[shared.NumbersV2RegulatoryComplianceBundle] = field(default=None)
    
