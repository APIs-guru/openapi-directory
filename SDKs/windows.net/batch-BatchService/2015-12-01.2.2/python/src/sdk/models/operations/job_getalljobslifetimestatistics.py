from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class JobGetAllJobsLifetimeStatisticsQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class JobGetAllJobsLifetimeStatisticsHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class JobGetAllJobsLifetimeStatisticsRequest:
    query_params: JobGetAllJobsLifetimeStatisticsQueryParams = field(default=None)
    headers: JobGetAllJobsLifetimeStatisticsHeaders = field(default=None)
    

@dataclass
class JobGetAllJobsLifetimeStatisticsResponse:
    batch_error: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    job_statistics: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
