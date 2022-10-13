from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAliasesQueryParams:
    continue_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'continueFrom', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAliasesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAliasesRequest:
    query_params: GetAliasesQueryParams = field(default=None)
    security: GetAliasesSecurity = field(default=None)
    

@dataclass
class GetAliasesResponse:
    content_type: str = field(default=None)
    get_aliases_model: Optional[shared.GetAliasesModel] = field(default=None)
    status_code: int = field(default=None)
    
