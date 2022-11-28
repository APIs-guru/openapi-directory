from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FAX_MEDIA_SERVERS = [
	"https://fax.twilio.com",
]


@dataclass
class FetchFaxMediaPathParams:
    fax_sid: str = field(metadata={'path_param': { 'field_name': 'FaxSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFaxMediaSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFaxMediaRequest:
    path_params: FetchFaxMediaPathParams = field()
    security: FetchFaxMediaSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFaxMediaResponse:
    content_type: str = field()
    status_code: int = field()
    fax_v1_fax_fax_media: Optional[shared.FaxV1FaxFaxMedia] = field(default=None)
    
