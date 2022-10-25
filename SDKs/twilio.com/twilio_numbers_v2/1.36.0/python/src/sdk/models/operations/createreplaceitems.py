from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_REPLACE_ITEMS_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateReplaceItemsPathParams:
    bundle_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BundleSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateReplaceItemsCreateReplaceItemsRequest:
    from_bundle_sid: str = field(default=None, metadata={'form': { 'field_name': 'FromBundleSid' }})
    

@dataclass
class CreateReplaceItemsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateReplaceItemsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateReplaceItemsPathParams = field(default=None)
    request: Optional[CreateReplaceItemsCreateReplaceItemsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateReplaceItemsSecurity = field(default=None)
    

@dataclass
class CreateReplaceItemsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    numbers_v2_regulatory_compliance_bundle_replace_items: Optional[shared.NumbersV2RegulatoryComplianceBundleReplaceItems] = field(default=None)
    
