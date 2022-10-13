from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCommentaryFromEmployeePathParams:
    commentary_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CommentaryId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommentaryFromEmployeeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetCommentaryFromEmployeeRequest:
    path_params: GetCommentaryFromEmployeePathParams = field(default=None)
    headers: GetCommentaryFromEmployeeHeaders = field(default=None)
    

@dataclass
class GetCommentaryFromEmployeeResponse:
    commentary: Optional[shared.Commentary] = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
