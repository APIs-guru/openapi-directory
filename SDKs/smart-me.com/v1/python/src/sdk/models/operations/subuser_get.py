from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubUserGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubUserGetRequest:
    path_params: SubUserGetPathParams = field()
    

@dataclass
class SubUserGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    sub_user_data: Optional[shared.SubUserData] = field(default=None)
    
