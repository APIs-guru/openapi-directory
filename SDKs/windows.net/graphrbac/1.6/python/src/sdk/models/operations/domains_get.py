from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DomainsGetPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class DomainsGetQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class DomainsGetRequest:
    path_params: DomainsGetPathParams = field()
    query_params: DomainsGetQueryParams = field()
    

@dataclass
class DomainsGetResponse:
    content_type: str = field()
    status_code: int = field()
    domain: Optional[dict[str, dict[str, Any]]] = field(default=None)
    
