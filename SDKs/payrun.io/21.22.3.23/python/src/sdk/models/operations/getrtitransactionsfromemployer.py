from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRtiTransactionsFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRtiTransactionsFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRtiTransactionsFromEmployerRequest:
    headers: GetRtiTransactionsFromEmployerHeaders = field()
    path_params: GetRtiTransactionsFromEmployerPathParams = field()
    

@dataclass
class GetRtiTransactionsFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
