from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchPensionPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pension_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PensionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPensionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPensionRequest:
    path_params: PatchPensionPathParams = field(default=None)
    headers: PatchPensionHeaders = field(default=None)
    request: shared.Pension = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchPensionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pension: Optional[shared.Pension] = field(default=None)
    status_code: int = field(default=None)
    
