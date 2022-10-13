from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteAliasQueryParams:
    alias_name: str = field(default=None, metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAliasSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAliasRequest:
    query_params: DeleteAliasQueryParams = field(default=None)
    security: DeleteAliasSecurity = field(default=None)
    

@dataclass
class DeleteAliasResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
