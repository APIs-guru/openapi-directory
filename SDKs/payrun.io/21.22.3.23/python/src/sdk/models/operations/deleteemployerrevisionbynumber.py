from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteEmployerRevisionByNumberPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmployerRevisionByNumberHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmployerRevisionByNumberRequest:
    headers: DeleteEmployerRevisionByNumberHeaders = field()
    path_params: DeleteEmployerRevisionByNumberPathParams = field()
    

@dataclass
class DeleteEmployerRevisionByNumberResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
