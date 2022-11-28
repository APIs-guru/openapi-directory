from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetThirdPartyTransactionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    third_party_transaction_id: str = field(metadata={'path_param': { 'field_name': 'ThirdPartyTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThirdPartyTransactionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThirdPartyTransactionRequest:
    headers: GetThirdPartyTransactionHeaders = field()
    path_params: GetThirdPartyTransactionPathParams = field()
    

@dataclass
class GetThirdPartyTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    third_party_transaction: Optional[Any] = field(default=None)
    
