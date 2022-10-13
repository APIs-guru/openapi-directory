from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVeteranStatusSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetVeteranStatusRequest:
    request: shared.VeteranStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetVeteranStatusSecurity = field(default=None)
    

@dataclass
class GetVeteranStatusResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    authorization_error: Optional[shared.AuthorizationError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    veteran_status_confirmation: Optional[shared.VeteranStatusConfirmation] = field(default=None)
    
