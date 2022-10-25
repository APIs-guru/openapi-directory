from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DEPLOYMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListDeploymentPathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDeploymentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDeploymentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDeploymentPathParams = field(default=None)
    query_params: ListDeploymentQueryParams = field(default=None)
    security: ListDeploymentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDeploymentListDeploymentResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDeploymentListDeploymentResponse:
    deployments: Optional[List[shared.ServerlessV1ServiceEnvironmentDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    meta: Optional[ListDeploymentListDeploymentResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDeploymentResponse:
    content_type: str = field(default=None)
    list_deployment_response: Optional[ListDeploymentListDeploymentResponse] = field(default=None)
    status_code: int = field(default=None)
    
