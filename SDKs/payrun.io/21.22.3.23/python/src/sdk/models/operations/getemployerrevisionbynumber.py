from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployerRevisionByNumberPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerRevisionByNumberHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerRevisionByNumberRequest:
    headers: GetEmployerRevisionByNumberHeaders = field()
    path_params: GetEmployerRevisionByNumberPathParams = field()
    

@dataclass
class GetEmployerRevisionByNumberResponse:
    content_type: str = field()
    status_code: int = field()
    employer: Optional[shared.Employer] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
