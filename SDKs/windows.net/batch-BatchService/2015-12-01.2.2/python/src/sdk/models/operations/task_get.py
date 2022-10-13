from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class TaskGetPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaskGetQueryParams:
    dollar_expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$expand', 'style': 'form', 'explode': True }})
    dollar_select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$select', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class TaskGetHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    if_unmodified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Unmodified-Since' }})
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id' }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date' }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id' }})
    

@dataclass
class TaskGetRequest:
    path_params: TaskGetPathParams = field(default=None)
    query_params: TaskGetQueryParams = field(default=None)
    headers: TaskGetHeaders = field(default=None)
    

@dataclass
class TaskGetResponse:
    batch_error: Optional[Any] = field(default=None)
    cloud_task: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
