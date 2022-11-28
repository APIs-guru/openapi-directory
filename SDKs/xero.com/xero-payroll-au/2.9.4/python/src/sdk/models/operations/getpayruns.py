from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayRunsQueryParams:
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    where: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayRunsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayRunsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayRunsRequest:
    headers: GetPayRunsHeaders = field()
    query_params: GetPayRunsQueryParams = field()
    security: GetPayRunsSecurity = field()
    

@dataclass
class GetPayRunsResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    pay_runs: Optional[shared.PayRuns] = field(default=None)
    
