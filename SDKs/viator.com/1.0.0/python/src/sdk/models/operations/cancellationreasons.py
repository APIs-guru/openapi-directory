from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CANCELLATION_REASONS_SERVERS = [
	"https://api.sandbox.viator.com/partner",
]


@dataclass
class CancellationReasonsHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class CancellationReasonsRequest:
    server_url: Optional[str] = field(default=None)
    headers: CancellationReasonsHeaders = field(default=None)
    

@dataclass
class CancellationReasonsResponse:
    four_hundred_and_one_unauthorized: Optional[shared.FourHundredAndOneUnauthorized] = field(default=None)
    four_hundred_and_six_not_acceptable: Optional[shared.FourHundredAndSixNotAcceptable] = field(default=None)
    five_hundred_internal_server_error: Optional[shared.FiveHundredInternalServerError] = field(default=None)
    five_hundred_and_three_service_unavailable: Optional[shared.FiveHundredAndThreeServiceUnavailable] = field(default=None)
    cancellation_reasons_responses: Optional[List[shared.CancellationReasonsResponse]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
