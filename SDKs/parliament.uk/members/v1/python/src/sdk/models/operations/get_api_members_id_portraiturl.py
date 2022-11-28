from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDPortraitURLPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDPortraitURLRequest:
    path_params: GetAPIMembersIDPortraitURLPathParams = field()
    

@dataclass
class GetAPIMembersIDPortraitURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    string_item: Optional[shared.StringItem] = field(default=None)
    
