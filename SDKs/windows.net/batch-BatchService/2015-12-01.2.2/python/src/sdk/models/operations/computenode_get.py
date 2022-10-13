from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class ComputeNodeGetPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    pool_id: str = field(default=None, metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ComputeNodeGetQueryParams:
    dollar_select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$select', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class ComputeNodeGetHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id' }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date' }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id' }})
    

@dataclass
class ComputeNodeGetRequest:
    path_params: ComputeNodeGetPathParams = field(default=None)
    query_params: ComputeNodeGetQueryParams = field(default=None)
    headers: ComputeNodeGetHeaders = field(default=None)
    

@dataclass
class ComputeNodeGetResponse:
    batch_error: Optional[Any] = field(default=None)
    compute_node: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
