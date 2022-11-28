from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisTransactionsFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisTransactionsFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisTransactionsFromEmployerRequest:
    headers: GetCisTransactionsFromEmployerHeaders = field()
    path_params: GetCisTransactionsFromEmployerPathParams = field()
    

@dataclass
class GetCisTransactionsFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
