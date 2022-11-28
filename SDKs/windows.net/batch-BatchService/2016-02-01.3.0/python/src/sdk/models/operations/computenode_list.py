from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional


@dataclass
class ComputeNodeListPathParams:
    pool_id: str = field(metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ComputeNodeListQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    dollar_select: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$select', 'style': 'form', 'explode': True }})
    maxresults: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxresults', 'style': 'form', 'explode': True }})
    timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeout', 'style': 'form', 'explode': True }})
    

@dataclass
class ComputeNodeListHeaders:
    client_request_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'client-request-id', 'style': 'simple', 'explode': False }})
    ocp_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'ocp-date', 'style': 'simple', 'explode': False }})
    return_client_request_id: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'return-client-request-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ComputeNodeListRequest:
    headers: ComputeNodeListHeaders = field()
    path_params: ComputeNodeListPathParams = field()
    query_params: ComputeNodeListQueryParams = field()
    

@dataclass
class ComputeNodeListResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    batch_error: Optional[Any] = field(default=None)
    compute_node_list_result: Optional[Any] = field(default=None)
    
