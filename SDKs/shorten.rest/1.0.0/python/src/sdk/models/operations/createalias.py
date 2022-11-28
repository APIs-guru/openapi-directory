from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAliasQueryParams:
    alias_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateAliasSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateAliasRequest:
    query_params: CreateAliasQueryParams = field()
    request: shared.CreateAliasModel = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAliasSecurity = field()
    

@dataclass
class CreateAliasResponse:
    content_type: str = field()
    status_code: int = field()
    create_alias_response_model: Optional[shared.CreateAliasResponseModel] = field(default=None)
    
