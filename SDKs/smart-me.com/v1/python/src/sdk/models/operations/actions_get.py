from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActionsGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetRequest:
    path_params: ActionsGetPathParams = field()
    

@dataclass
class ActionsGetResponse:
    content_type: str = field()
    status_code: int = field()
    action_informations: Optional[List[shared.ActionInformation]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
