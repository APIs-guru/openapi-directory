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
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetPayRunsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayRunsRequest:
    query_params: GetPayRunsQueryParams = field(default=None)
    headers: GetPayRunsHeaders = field(default=None)
    security: GetPayRunsSecurity = field(default=None)
    

@dataclass
class GetPayRunsResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    pay_runs: Optional[shared.PayRuns] = field(default=None)
    status_code: int = field(default=None)
    
