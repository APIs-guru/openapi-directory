from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GymGetPathParams:
    gym_id: int = field(metadata={'path_param': { 'field_name': 'gymID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GymGetRequest:
    path_params: GymGetPathParams = field()
    

@dataclass
class GymGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[shared.APIResponse] = field(default=None)
    default_response_dto_of_gym_dto: Optional[shared.DefaultResponseDtoOfGymDto] = field(default=None)
    
