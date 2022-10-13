from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class InstructPayoutV3PathParams:
    payout_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payoutId', 'style': 'simple', 'explode': False }})
    

@dataclass
class InstructPayoutV3Request:
    path_params: InstructPayoutV3PathParams = field(default=None)
    

@dataclass
class InstructPayoutV3Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    inline_response_404: Optional[Any] = field(default=None)
    inline_response_409: Optional[Any] = field(default=None)
    
