from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteRtiTransactionTagPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    rti_transaction_id: str = field(metadata={'path_param': { 'field_name': 'RtiTransactionId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRtiTransactionTagHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRtiTransactionTagRequest:
    headers: DeleteRtiTransactionTagHeaders = field()
    path_params: DeleteRtiTransactionTagPathParams = field()
    

@dataclass
class DeleteRtiTransactionTagResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
