from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


FETCH_DEACTIVATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchDeactivationQueryParams:
    date_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'Date', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchDeactivationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeactivationRequest:
    query_params: FetchDeactivationQueryParams = field()
    security: FetchDeactivationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDeactivationResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_deactivation: Optional[shared.MessagingV1Deactivation] = field(default=None)
    
