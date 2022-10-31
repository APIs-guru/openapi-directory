from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class FileGetFromTaskPathParams:
    file_name: str = field(default=None, metadata={'path_param': { 'field_name': 'fileName', 'style': 'simple', 'explode': False }})
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileGetFromTaskQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class FileGetFromTaskHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_unmodified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Unmodified-Since', 'style': 'simple', 'explode': False }})
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    ocp_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-range', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileGetFromTaskRequest:
    path_params: FileGetFromTaskPathParams = field(default=None)
    query_params: FileGetFromTaskQueryParams = field(default=None)
    headers: FileGetFromTaskHeaders = field(default=None)
    

@dataclass
class FileGetFromTaskResponse:
    batch_error: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    file_get_from_task_200_application_json_binary_string: Optional[bytes] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
