from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PatchEmployerRequest:
    path_params: PatchEmployerPathParams = field(default=None)
    headers: PatchEmployerHeaders = field(default=None)
    request: shared.Employer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchEmployerResponse:
    content_type: str = field(default=None)
    employer: Optional[shared.Employer] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
