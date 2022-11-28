from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAliasQueryParams:
    alias_name: str = field(metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAliasSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAliasRequest:
    query_params: DeleteAliasQueryParams = field()
    security: DeleteAliasSecurity = field()
    

@dataclass
class DeleteAliasResponse:
    content_type: str = field()
    status_code: int = field()
    
