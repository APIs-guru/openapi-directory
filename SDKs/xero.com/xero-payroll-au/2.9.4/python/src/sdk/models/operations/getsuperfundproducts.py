from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSuperfundProductsQueryParams:
    abn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ABN', 'style': 'form', 'explode': True }})
    usi: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'USI', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSuperfundProductsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetSuperfundProductsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSuperfundProductsRequest:
    query_params: GetSuperfundProductsQueryParams = field(default=None)
    headers: GetSuperfundProductsHeaders = field(default=None)
    security: GetSuperfundProductsSecurity = field(default=None)
    

@dataclass
class GetSuperfundProductsResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    super_fund_products: Optional[shared.SuperFundProducts] = field(default=None)
    
