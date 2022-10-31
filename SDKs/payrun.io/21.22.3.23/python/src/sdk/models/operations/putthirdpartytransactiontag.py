from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutThirdPartyTransactionTagPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    third_party_transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ThirdPartyTransactionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutThirdPartyTransactionTagHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutThirdPartyTransactionTagRequest:
    path_params: PutThirdPartyTransactionTagPathParams = field(default=None)
    headers: PutThirdPartyTransactionTagHeaders = field(default=None)
    

@dataclass
class PutThirdPartyTransactionTagResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
