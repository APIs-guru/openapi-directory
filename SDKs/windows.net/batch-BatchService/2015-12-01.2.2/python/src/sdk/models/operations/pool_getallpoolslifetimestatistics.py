from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PoolGetAllPoolsLifetimeStatisticsQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class PoolGetAllPoolsLifetimeStatisticsHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id' }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date' }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id' }})
    

@dataclass
class PoolGetAllPoolsLifetimeStatisticsRequest:
    query_params: PoolGetAllPoolsLifetimeStatisticsQueryParams = field(default=None)
    headers: PoolGetAllPoolsLifetimeStatisticsHeaders = field(default=None)
    

@dataclass
class PoolGetAllPoolsLifetimeStatisticsResponse:
    batch_error: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    pool_statistics: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
