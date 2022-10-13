from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAliasQueryParams:
    alias_name: str = field(default=None, metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateAliasSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateAliasRequest:
    query_params: UpdateAliasQueryParams = field(default=None)
    request: shared.CreateAliasModel = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAliasSecurity = field(default=None)
    

@dataclass
class UpdateAliasResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
