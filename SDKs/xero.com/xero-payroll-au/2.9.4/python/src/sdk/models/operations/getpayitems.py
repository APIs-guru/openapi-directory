from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayItemsQueryParams:
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    where: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayItemsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class GetPayItemsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayItemsRequest:
    query_params: GetPayItemsQueryParams = field(default=None)
    headers: GetPayItemsHeaders = field(default=None)
    security: GetPayItemsSecurity = field(default=None)
    

@dataclass
class GetPayItemsResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    pay_items: Optional[shared.PayItems] = field(default=None)
    status_code: int = field(default=None)
    
