from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclass
class ListWorkspaceQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListWorkspaceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListWorkspaceRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListWorkspaceQueryParams = field(default=None)
    security: ListWorkspaceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListWorkspaceListWorkspaceResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListWorkspaceListWorkspaceResponse:
    meta: Optional[ListWorkspaceListWorkspaceResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    workspaces: Optional[List[shared.TaskrouterV1Workspace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaces' }})
    

@dataclass
class ListWorkspaceResponse:
    content_type: str = field(default=None)
    list_workspace_response: Optional[ListWorkspaceListWorkspaceResponse] = field(default=None)
    status_code: int = field(default=None)
    
