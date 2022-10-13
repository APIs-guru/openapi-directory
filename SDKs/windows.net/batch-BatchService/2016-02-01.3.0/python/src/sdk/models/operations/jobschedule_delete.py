from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class JobScheduleDeletePathParams:
    job_schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobScheduleDeleteQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class JobScheduleDeleteHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    if_unmodified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Unmodified-Since' }})
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id' }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date' }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id' }})
    

@dataclass
class JobScheduleDeleteRequest:
    path_params: JobScheduleDeletePathParams = field(default=None)
    query_params: JobScheduleDeleteQueryParams = field(default=None)
    headers: JobScheduleDeleteHeaders = field(default=None)
    

@dataclass
class JobScheduleDeleteResponse:
    batch_error: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
