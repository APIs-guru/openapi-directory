from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisTransactionsFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisTransactionsFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetCisTransactionsFromEmployerRequest:
    path_params: GetCisTransactionsFromEmployerPathParams = field(default=None)
    headers: GetCisTransactionsFromEmployerHeaders = field(default=None)
    

@dataclass
class GetCisTransactionsFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
