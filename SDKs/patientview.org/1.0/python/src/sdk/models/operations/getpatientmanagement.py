from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPatientManagementPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    identifier_id: int = field(metadata={'path_param': { 'field_name': 'identifierId', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientManagementRequest:
    path_params: GetPatientManagementPathParams = field()
    

@dataclass
class GetPatientManagementResponse:
    content_type: str = field()
    status_code: int = field()
    patient_management: Optional[shared.PatientManagement] = field(default=None)
    
