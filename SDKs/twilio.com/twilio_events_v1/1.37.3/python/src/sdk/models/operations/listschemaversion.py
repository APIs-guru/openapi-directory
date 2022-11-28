from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SCHEMA_VERSION_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class ListSchemaVersionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListSchemaVersionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSchemaVersionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSchemaVersionListSchemaVersionResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSchemaVersionListSchemaVersionResponse:
    meta: Optional[ListSchemaVersionListSchemaVersionResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    schema_versions: Optional[List[shared.EventsV1SchemaSchemaVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema_versions') }})
    

@dataclass
class ListSchemaVersionRequest:
    path_params: ListSchemaVersionPathParams = field()
    query_params: ListSchemaVersionQueryParams = field()
    security: ListSchemaVersionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSchemaVersionResponse:
    content_type: str = field()
    status_code: int = field()
    list_schema_version_response: Optional[ListSchemaVersionListSchemaVersionResponse] = field(default=None)
    
