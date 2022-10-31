from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class PoolListPoolUsageMetricsQueryParams:
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    endtime: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'endtime', 'style': 'form', 'explode': True }})
    maxresults: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxresults', 'style': 'form', 'explode': True }})
    starttime: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'starttime', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class PoolListPoolUsageMetricsHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PoolListPoolUsageMetricsRequest:
    query_params: PoolListPoolUsageMetricsQueryParams = field(default=None)
    headers: PoolListPoolUsageMetricsHeaders = field(default=None)
    

@dataclass
class PoolListPoolUsageMetricsResponse:
    batch_error: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    pool_list_pool_usage_metrics_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
