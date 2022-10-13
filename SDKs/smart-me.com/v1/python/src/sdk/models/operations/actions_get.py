from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActionsGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetRequest:
    path_params: ActionsGetPathParams = field(default=None)
    

@dataclass
class ActionsGetResponse:
    action_informations: Optional[List[shared.ActionInformation]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
