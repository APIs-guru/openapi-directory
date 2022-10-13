from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAPIV1PoolsDefaultQueryParams:
    sku_name: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'skuName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1PoolsDefaultRequest:
    query_params: GetAPIV1PoolsDefaultQueryParams = field(default=None)
    

@dataclass
class GetAPIV1PoolsDefaultResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pool_status_response_bodies: Optional[List[shared.PoolStatusResponseBody]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
