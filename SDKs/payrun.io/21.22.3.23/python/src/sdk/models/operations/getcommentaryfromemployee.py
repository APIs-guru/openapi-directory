from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCommentaryFromEmployeePathParams:
    commentary_id: str = field(metadata={'path_param': { 'field_name': 'CommentaryId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommentaryFromEmployeeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommentaryFromEmployeeRequest:
    headers: GetCommentaryFromEmployeeHeaders = field()
    path_params: GetCommentaryFromEmployeePathParams = field()
    

@dataclass
class GetCommentaryFromEmployeeResponse:
    content_type: str = field()
    status_code: int = field()
    commentary: Optional[shared.Commentary] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
