from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCustomLogosPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomLogosRequest:
    path_params: GetCustomLogosPathParams = field()
    

@dataclass
class GetCustomLogosResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    pictures: Optional[List[shared.Picture]] = field(default=None)
    
