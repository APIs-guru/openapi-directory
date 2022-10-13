from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubmitAnswersPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubmitAnswersRequest:
    path_params: SubmitAnswersPathParams = field(default=None)
    request: dict[str, str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubmitAnswersResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
