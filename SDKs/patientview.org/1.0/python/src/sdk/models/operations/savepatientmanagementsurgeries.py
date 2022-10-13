from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SavePatientManagementSurgeriesPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    identifier_id: int = field(default=None, metadata={'path_param': { 'field_name': 'identifierId', 'style': 'simple', 'explode': False }})
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SavePatientManagementSurgeriesRequest:
    path_params: SavePatientManagementSurgeriesPathParams = field(default=None)
    request: Optional[shared.PatientManagement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SavePatientManagementSurgeriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
