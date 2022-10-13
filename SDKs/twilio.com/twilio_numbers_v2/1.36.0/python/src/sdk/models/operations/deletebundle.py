from dataclasses import dataclass, field
from typing import Optional
DELETE_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class DeleteBundlePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteBundleRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteBundlePathParams = field(default=None)
    security: DeleteBundleSecurity = field(default=None)
    

@dataclass
class DeleteBundleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
