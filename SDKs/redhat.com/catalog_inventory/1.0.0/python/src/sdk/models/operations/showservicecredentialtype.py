from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServiceCredentialTypePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServiceCredentialTypeRequest:
    path_params: ShowServiceCredentialTypePathParams = field(default=None)
    

@dataclass
class ShowServiceCredentialTypeResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_credential_type: Optional[shared.ServiceCredentialType] = field(default=None)
    status_code: int = field(default=None)
    
