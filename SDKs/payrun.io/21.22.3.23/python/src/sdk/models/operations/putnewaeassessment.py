from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutNewAeAssessmentPathParams:
    ae_assessment_id: str = field(metadata={'path_param': { 'field_name': 'AEAssessmentId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutNewAeAssessmentHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutNewAeAssessmentRequest:
    headers: PutNewAeAssessmentHeaders = field()
    path_params: PutNewAeAssessmentPathParams = field()
    request: shared.AeAssessment = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutNewAeAssessmentResponse:
    content_type: str = field()
    status_code: int = field()
    ae_assessment: Optional[shared.AeAssessment] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
