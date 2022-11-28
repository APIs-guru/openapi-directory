from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRtiTransactionFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    rti_transaction_id: str = field(metadata={'path_param': { 'field_name': 'RtiTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRtiTransactionFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRtiTransactionFromEmployerRequest:
    headers: GetRtiTransactionFromEmployerHeaders = field()
    path_params: GetRtiTransactionFromEmployerPathParams = field()
    

@dataclass
class GetRtiTransactionFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    rti_transaction_base: Optional[shared.RtiTransactionBase] = field(default=None)
    
