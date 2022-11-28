from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SCHEMA_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class FetchSchemaPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSchemaSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSchemaRequest:
    path_params: FetchSchemaPathParams = field()
    security: FetchSchemaSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_schema: Optional[shared.EventsV1Schema] = field(default=None)
    
