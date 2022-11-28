from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteThirdPartyTransactionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    third_party_transaction_id: str = field(metadata={'path_param': { 'field_name': 'ThirdPartyTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteThirdPartyTransactionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteThirdPartyTransactionRequest:
    headers: DeleteThirdPartyTransactionHeaders = field()
    path_params: DeleteThirdPartyTransactionPathParams = field()
    

@dataclass
class DeleteThirdPartyTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
