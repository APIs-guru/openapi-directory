from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployerRevisionByNumberPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(default=None, metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerRevisionByNumberHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetEmployerRevisionByNumberRequest:
    path_params: GetEmployerRevisionByNumberPathParams = field(default=None)
    headers: GetEmployerRevisionByNumberHeaders = field(default=None)
    

@dataclass
class GetEmployerRevisionByNumberResponse:
    content_type: str = field(default=None)
    employer: Optional[shared.Employer] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
