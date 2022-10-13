from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_SCHEMA_VERSION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class ListSchemaVersionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSchemaVersionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSchemaVersionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListSchemaVersionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListSchemaVersionPathParams = field(default=None)
    query_params: ListSchemaVersionQueryParams = field(default=None)
    security: ListSchemaVersionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListSchemaVersion200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListSchemaVersion200ApplicationJSONListSchemaVersionResponse:
    meta: Optional[ListSchemaVersion200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    schema_versions: Optional[List[shared.EventsV1SchemaSchemaVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema_versions' }})
    

@dataclass
class ListSchemaVersionResponse:
    content_type: str = field(default=None)
    list_schema_version_response: Optional[ListSchemaVersion200ApplicationJSONListSchemaVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
