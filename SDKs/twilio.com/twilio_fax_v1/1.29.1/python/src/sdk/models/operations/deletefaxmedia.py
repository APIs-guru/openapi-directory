from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_FAX_MEDIA_SERVERS = [
	"https://fax.twilio.com",
]


@dataclass
class DeleteFaxMediaPathParams:
    fax_sid: str = field(metadata={'path_param': { 'field_name': 'FaxSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFaxMediaSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFaxMediaRequest:
    path_params: DeleteFaxMediaPathParams = field()
    security: DeleteFaxMediaSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFaxMediaResponse:
    content_type: str = field()
    status_code: int = field()
    
