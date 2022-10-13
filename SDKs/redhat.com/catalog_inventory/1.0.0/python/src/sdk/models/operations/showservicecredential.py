from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServiceCredentialPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServiceCredentialRequest:
    path_params: ShowServiceCredentialPathParams = field(default=None)
    

@dataclass
class ShowServiceCredentialResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_credential: Optional[shared.ServiceCredential] = field(default=None)
    status_code: int = field(default=None)
    
