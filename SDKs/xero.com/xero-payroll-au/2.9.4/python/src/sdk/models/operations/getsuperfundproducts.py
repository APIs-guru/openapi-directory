from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSuperfundProductsQueryParams:
    abn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ABN', 'style': 'form', 'explode': True }})
    usi: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'USI', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSuperfundProductsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSuperfundProductsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSuperfundProductsRequest:
    headers: GetSuperfundProductsHeaders = field()
    query_params: GetSuperfundProductsQueryParams = field()
    security: GetSuperfundProductsSecurity = field()
    

@dataclass
class GetSuperfundProductsResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    super_fund_products: Optional[shared.SuperFundProducts] = field(default=None)
    
