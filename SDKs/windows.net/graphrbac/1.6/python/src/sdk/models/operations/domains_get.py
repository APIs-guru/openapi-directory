from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DomainsGetPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class DomainsGetQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class DomainsGetRequest:
    path_params: DomainsGetPathParams = field(default=None)
    query_params: DomainsGetQueryParams = field(default=None)
    

@dataclass
class DomainsGetResponse:
    content_type: str = field(default=None)
    domain: Optional[dict[str, dict[str, Any]]] = field(default=None)
    status_code: int = field(default=None)
    
