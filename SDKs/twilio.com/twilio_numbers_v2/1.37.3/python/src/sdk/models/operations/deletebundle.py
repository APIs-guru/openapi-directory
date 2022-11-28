from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class DeleteBundlePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteBundleRequest:
    path_params: DeleteBundlePathParams = field()
    security: DeleteBundleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteBundleResponse:
    content_type: str = field()
    status_code: int = field()
    
