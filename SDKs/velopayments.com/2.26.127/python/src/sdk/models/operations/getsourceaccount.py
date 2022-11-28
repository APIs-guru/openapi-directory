from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSourceAccountPathParams:
    source_account_id: str = field(metadata={'path_param': { 'field_name': 'sourceAccountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSourceAccountRequest:
    path_params: GetSourceAccountPathParams = field()
    

@dataclass
class GetSourceAccountResponse:
    content_type: str = field()
    status_code: int = field()
    source_account_response: Optional[shared.SourceAccountResponse] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
