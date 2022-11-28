from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PayorCreateAPIKeyRequestPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'applicationId', 'style': 'simple', 'explode': False }})
    payor_id: str = field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayorCreateAPIKeyRequestRequest:
    path_params: PayorCreateAPIKeyRequestPathParams = field()
    request: shared.PayorCreateAPIKeyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PayorCreateAPIKeyRequestResponse:
    content_type: str = field()
    status_code: int = field()
    payor_create_api_key_response: Optional[shared.PayorCreateAPIKeyResponse] = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
