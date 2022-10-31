from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class JobScheduleGetPathParams:
    job_schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobScheduleGetQueryParams:
    dollar_expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$expand', 'style': 'form', 'explode': True }})
    dollar_select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$select', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class JobScheduleGetHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    if_unmodified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Unmodified-Since', 'style': 'simple', 'explode': False }})
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobScheduleGetRequest:
    path_params: JobScheduleGetPathParams = field(default=None)
    query_params: JobScheduleGetQueryParams = field(default=None)
    headers: JobScheduleGetHeaders = field(default=None)
    

@dataclass
class JobScheduleGetResponse:
    batch_error: Optional[Any] = field(default=None)
    cloud_job_schedule: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
