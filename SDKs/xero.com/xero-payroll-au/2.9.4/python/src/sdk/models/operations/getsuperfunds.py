from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSuperfundsQueryParams:
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    where: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSuperfundsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetSuperfundsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSuperfundsRequest:
    query_params: GetSuperfundsQueryParams = field(default=None)
    headers: GetSuperfundsHeaders = field(default=None)
    security: GetSuperfundsSecurity = field(default=None)
    

@dataclass
class GetSuperfundsResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    super_funds: Optional[shared.SuperFunds] = field(default=None)
    
