from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAeAssessmentsFromEmployeePathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAeAssessmentsFromEmployeeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetAeAssessmentsFromEmployeeRequest:
    path_params: GetAeAssessmentsFromEmployeePathParams = field(default=None)
    headers: GetAeAssessmentsFromEmployeeHeaders = field(default=None)
    

@dataclass
class GetAeAssessmentsFromEmployeeResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
