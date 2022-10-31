from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteRtiTransactionPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    rti_transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'RtiTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRtiTransactionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRtiTransactionRequest:
    path_params: DeleteRtiTransactionPathParams = field(default=None)
    headers: DeleteRtiTransactionHeaders = field(default=None)
    

@dataclass
class DeleteRtiTransactionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
