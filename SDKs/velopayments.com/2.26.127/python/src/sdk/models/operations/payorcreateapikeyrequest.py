from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PayorCreateAPIKeyRequestPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'applicationId', 'style': 'simple', 'explode': False }})
    payor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayorCreateAPIKeyRequestRequest:
    path_params: PayorCreateAPIKeyRequestPathParams = field(default=None)
    request: shared.PayorCreateAPIKeyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PayorCreateAPIKeyRequestResponse:
    content_type: str = field(default=None)
    payor_create_api_key_response: Optional[shared.PayorCreateAPIKeyResponse] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    
