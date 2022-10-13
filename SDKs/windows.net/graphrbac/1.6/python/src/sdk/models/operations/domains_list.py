from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DomainsListPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class DomainsListQueryParams:
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class DomainsListRequest:
    path_params: DomainsListPathParams = field(default=None)
    query_params: DomainsListQueryParams = field(default=None)
    

@dataclass
class DomainsListResponse:
    content_type: str = field(default=None)
    domain_list_result: Optional[shared.DomainListResult] = field(default=None)
    status_code: int = field(default=None)
    
