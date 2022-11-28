from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsFromThirdPartyTransactionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    third_party_transaction_id: str = field(metadata={'path_param': { 'field_name': 'ThirdPartyTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromThirdPartyTransactionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromThirdPartyTransactionRequest:
    headers: GetTagsFromThirdPartyTransactionHeaders = field()
    path_params: GetTagsFromThirdPartyTransactionPathParams = field()
    

@dataclass
class GetTagsFromThirdPartyTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
