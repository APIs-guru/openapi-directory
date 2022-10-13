from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class FileGetNodeFilePropertiesFromComputeNodePathParams:
    file_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    pool_id: str = field(default=None, metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileGetNodeFilePropertiesFromComputeNodeQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class FileGetNodeFilePropertiesFromComputeNodeHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_unmodified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Unmodified-Since' }})
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id' }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date' }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id' }})
    

@dataclass
class FileGetNodeFilePropertiesFromComputeNodeRequest:
    path_params: FileGetNodeFilePropertiesFromComputeNodePathParams = field(default=None)
    query_params: FileGetNodeFilePropertiesFromComputeNodeQueryParams = field(default=None)
    headers: FileGetNodeFilePropertiesFromComputeNodeHeaders = field(default=None)
    

@dataclass
class FileGetNodeFilePropertiesFromComputeNodeResponse:
    batch_error: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
