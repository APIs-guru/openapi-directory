from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class DeleteNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = field(metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteNetworkAccessProfileNetworkRequest:
    path_params: DeleteNetworkAccessProfileNetworkPathParams = field()
    security: DeleteNetworkAccessProfileNetworkSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteNetworkAccessProfileNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    
