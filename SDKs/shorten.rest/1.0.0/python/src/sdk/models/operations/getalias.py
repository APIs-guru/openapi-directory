from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAliasQueryParams:
    alias_name: str = field(default=None, metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAliasSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAliasRequest:
    query_params: GetAliasQueryParams = field(default=None)
    security: GetAliasSecurity = field(default=None)
    

@dataclass
class GetAliasResponse:
    alias_model: Optional[shared.AliasModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
