from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_DEPLOYED_DEVICES_DEPLOYMENT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class ListDeployedDevicesDeploymentPathParams:
    fleet_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'FleetSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDeployedDevicesDeploymentQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDeployedDevicesDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListDeployedDevicesDeploymentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListDeployedDevicesDeploymentPathParams = field(default=None)
    query_params: ListDeployedDevicesDeploymentQueryParams = field(default=None)
    security: ListDeployedDevicesDeploymentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListDeployedDevicesDeployment200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListDeployedDevicesDeployment200ApplicationJSONListDeployedDevicesDeploymentResponse:
    deployments: Optional[List[shared.PreviewDeployedDevicesFleetDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    meta: Optional[ListDeployedDevicesDeployment200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListDeployedDevicesDeploymentResponses:
    list_deployed_devices_deployment_response: Optional[ListDeployedDevicesDeployment200ApplicationJSONListDeployedDevicesDeploymentResponse] = field(default=None)
    

@dataclass
class ListDeployedDevicesDeploymentResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListDeployedDevicesDeploymentResponses]] = field(default=None)
    status_code: int = field(default=None)
    
