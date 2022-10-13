from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared
FETCH_DEACTIVATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchDeactivationQueryParams:
    date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'Date', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchDeactivationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeactivationRequest:
    server_url: Optional[str] = field(default=None)
    query_params: FetchDeactivationQueryParams = field(default=None)
    security: FetchDeactivationSecurity = field(default=None)
    

@dataclass
class FetchDeactivationResponses:
    messaging_v1_deactivation: Optional[shared.MessagingV1Deactivation] = field(default=None)
    

@dataclass
class FetchDeactivationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchDeactivationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
