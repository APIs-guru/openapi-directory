from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SubmitPayoutV3MultipartFormData:
    file: Optional[List[shared.PaymentInstructionV3]] = field(default=None, metadata={'multipart_form': { 'field_name': 'file', 'json': True }})
    payor_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'payorId' }})
    payout_from_payor_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'payoutFromPayorId' }})
    payout_to_payor_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'payoutToPayorId' }})
    

@dataclass
class SubmitPayoutV3Requests:
    create_payout_request_v3: Optional[shared.CreatePayoutRequestV3] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object: Optional[SubmitPayoutV3MultipartFormData] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SubmitPayoutV3Request:
    request: SubmitPayoutV3Requests = field(default=None)
    

@dataclass
class SubmitPayoutV3Response:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    inline_response_400: Optional[Any] = field(default=None)
    inline_response_401: Optional[Any] = field(default=None)
    inline_response_403: Optional[Any] = field(default=None)
    
