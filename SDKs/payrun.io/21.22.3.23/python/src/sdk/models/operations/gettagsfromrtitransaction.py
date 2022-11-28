from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsFromRtiTransactionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    rti_transaction_id: str = field(metadata={'path_param': { 'field_name': 'RtiTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromRtiTransactionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromRtiTransactionRequest:
    headers: GetTagsFromRtiTransactionHeaders = field()
    path_params: GetTagsFromRtiTransactionPathParams = field()
    

@dataclass
class GetTagsFromRtiTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
