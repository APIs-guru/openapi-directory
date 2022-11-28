from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubmitAnswersPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubmitAnswersRequest:
    path_params: SubmitAnswersPathParams = field()
    request: dict[str, str] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubmitAnswersResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
