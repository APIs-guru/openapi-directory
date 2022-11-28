from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class FileGetFromComputeNodePathParams:
    file_name: str = field(metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    pool_id: str = field(metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileGetFromComputeNodeQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class FileGetFromComputeNodeHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_unmodified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Unmodified-Since', 'style': 'simple', 'explode': False }})
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    ocp_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-range', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileGetFromComputeNodeRequest:
    headers: FileGetFromComputeNodeHeaders = field()
    path_params: FileGetFromComputeNodePathParams = field()
    query_params: FileGetFromComputeNodeQueryParams = field()
    

@dataclass
class FileGetFromComputeNodeResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    batch_error: Optional[Any] = field(default=None)
    file_get_from_compute_node_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
