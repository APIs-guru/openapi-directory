from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVeteranStatusSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVeteranStatusRequest:
    request: shared.VeteranStatusRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetVeteranStatusSecurity = field()
    

@dataclass
class GetVeteranStatusResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    authorization_error: Optional[shared.AuthorizationError] = field(default=None)
    veteran_status_confirmation: Optional[shared.VeteranStatusConfirmation] = field(default=None)
    
