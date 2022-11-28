from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SavePatientManagementPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    identifier_id: int = field(metadata={'path_param': { 'field_name': 'identifierId', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SavePatientManagementRequest:
    path_params: SavePatientManagementPathParams = field()
    request: Optional[shared.PatientManagement] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SavePatientManagementResponse:
    content_type: str = field()
    status_code: int = field()
    
