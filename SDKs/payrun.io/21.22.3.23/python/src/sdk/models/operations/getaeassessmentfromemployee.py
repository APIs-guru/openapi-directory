from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAeAssessmentFromEmployeePathParams:
    ae_assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'AEAssessmentId', 'style': 'simple', 'explode': False }})
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAeAssessmentFromEmployeeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetAeAssessmentFromEmployeeRequest:
    path_params: GetAeAssessmentFromEmployeePathParams = field(default=None)
    headers: GetAeAssessmentFromEmployeeHeaders = field(default=None)
    

@dataclass
class GetAeAssessmentFromEmployeeResponse:
    ae_assessment: Optional[shared.AeAssessment] = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
