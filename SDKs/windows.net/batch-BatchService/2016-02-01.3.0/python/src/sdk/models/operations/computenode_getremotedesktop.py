from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ComputeNodeGetRemoteDesktopPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    pool_id: str = field(default=None, metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ComputeNodeGetRemoteDesktopQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class ComputeNodeGetRemoteDesktopHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id' }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date' }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id' }})
    

@dataclass
class ComputeNodeGetRemoteDesktopRequest:
    path_params: ComputeNodeGetRemoteDesktopPathParams = field(default=None)
    query_params: ComputeNodeGetRemoteDesktopQueryParams = field(default=None)
    headers: ComputeNodeGetRemoteDesktopHeaders = field(default=None)
    

@dataclass
class ComputeNodeGetRemoteDesktopResponse:
    batch_error: Optional[Any] = field(default=None)
    compute_node_get_remote_desktop_200_application_json_binary_string: Optional[bytes] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
