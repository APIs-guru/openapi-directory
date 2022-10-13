from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SCHEMA_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class FetchSchemaPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSchemaSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSchemaRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSchemaPathParams = field(default=None)
    security: FetchSchemaSecurity = field(default=None)
    

@dataclass
class FetchSchemaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_schema: Optional[shared.EventsV1Schema] = field(default=None)
    
