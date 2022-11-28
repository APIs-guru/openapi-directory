from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostNewAeAssessmentPathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostNewAeAssessmentHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostNewAeAssessmentRequest:
    headers: PostNewAeAssessmentHeaders = field()
    path_params: PostNewAeAssessmentPathParams = field()
    request: shared.AeAssessment = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostNewAeAssessmentResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    
