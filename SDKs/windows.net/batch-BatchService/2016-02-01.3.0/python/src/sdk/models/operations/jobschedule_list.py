from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class JobScheduleListQueryParams:
    dollar_expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$expand', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    dollar_select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$select', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    maxresults: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxresults', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class JobScheduleListHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id' }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date' }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id' }})
    

@dataclass
class JobScheduleListRequest:
    query_params: JobScheduleListQueryParams = field(default=None)
    headers: JobScheduleListHeaders = field(default=None)
    

@dataclass
class JobScheduleListResponse:
    batch_error: Optional[Any] = field(default=None)
    cloud_job_schedule_list_result: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
