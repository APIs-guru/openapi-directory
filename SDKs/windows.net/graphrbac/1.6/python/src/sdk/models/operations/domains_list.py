from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DomainsListPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class DomainsListQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclass
class DomainsListRequest:
    path_params: DomainsListPathParams = field()
    query_params: DomainsListQueryParams = field()
    

@dataclass
class DomainsListResponse:
    content_type: str = field()
    status_code: int = field()
    domain_list_result: Optional[shared.DomainListResult] = field(default=None)
    
