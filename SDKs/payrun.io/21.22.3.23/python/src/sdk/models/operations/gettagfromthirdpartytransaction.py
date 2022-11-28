from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagFromThirdPartyTransactionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    third_party_transaction_id: str = field(metadata={'path_param': { 'field_name': 'ThirdPartyTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromThirdPartyTransactionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromThirdPartyTransactionRequest:
    headers: GetTagFromThirdPartyTransactionHeaders = field()
    path_params: GetTagFromThirdPartyTransactionPathParams = field()
    

@dataclass
class GetTagFromThirdPartyTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
