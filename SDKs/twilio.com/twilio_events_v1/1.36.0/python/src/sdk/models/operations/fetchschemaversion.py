from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SCHEMA_VERSION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class FetchSchemaVersionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    schema_version: int = field(default=None, metadata={'path_param': { 'field_name': 'SchemaVersion', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSchemaVersionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSchemaVersionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSchemaVersionPathParams = field(default=None)
    security: FetchSchemaVersionSecurity = field(default=None)
    

@dataclass
class FetchSchemaVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_schema_schema_version: Optional[shared.EventsV1SchemaSchemaVersion] = field(default=None)
    
