from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAeAssessmentFromEmployeePathParams:
    ae_assessment_id: str = field(metadata={'path_param': { 'field_name': 'AEAssessmentId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAeAssessmentFromEmployeeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAeAssessmentFromEmployeeRequest:
    headers: GetAeAssessmentFromEmployeeHeaders = field()
    path_params: GetAeAssessmentFromEmployeePathParams = field()
    

@dataclass
class GetAeAssessmentFromEmployeeResponse:
    content_type: str = field()
    status_code: int = field()
    ae_assessment: Optional[shared.AeAssessment] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
