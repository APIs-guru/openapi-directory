from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubUserGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubUserGetRequest:
    path_params: SubUserGetPathParams = field(default=None)
    

@dataclass
class SubUserGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    sub_user_data: Optional[shared.SubUserData] = field(default=None)
    
