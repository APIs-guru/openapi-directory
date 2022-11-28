from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServiceCredentialTypePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServiceCredentialTypeRequest:
    path_params: ShowServiceCredentialTypePathParams = field()
    

@dataclass
class ShowServiceCredentialTypeResponse:
    content_type: str = field()
    status_code: int = field()
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_credential_type: Optional[shared.ServiceCredentialType] = field(default=None)
    
