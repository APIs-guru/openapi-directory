from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetThirdPartyTransactionPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    third_party_transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ThirdPartyTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetThirdPartyTransactionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetThirdPartyTransactionRequest:
    path_params: GetThirdPartyTransactionPathParams = field(default=None)
    headers: GetThirdPartyTransactionHeaders = field(default=None)
    

@dataclass
class GetThirdPartyTransactionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    third_party_transaction: Optional[Any] = field(default=None)
    
