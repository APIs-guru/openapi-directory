from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_GOODDATA_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateGooddataHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateGooddataSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateGooddataRequest:
    headers: CreateGooddataHeaders = field()
    security: CreateGooddataSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateGooddataResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_gooddata: Optional[shared.FlexV1Gooddata] = field(default=None)
    
