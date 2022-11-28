from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCisTransactionPathParams:
    cis_transaction_id: str = field(metadata={'path_param': { 'field_name': 'CisTransactionId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCisTransactionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCisTransactionRequest:
    headers: DeleteCisTransactionHeaders = field()
    path_params: DeleteCisTransactionPathParams = field()
    

@dataclass
class DeleteCisTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
