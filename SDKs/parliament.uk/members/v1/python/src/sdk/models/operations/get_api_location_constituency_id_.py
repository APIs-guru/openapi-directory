from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDRequest:
    path_params: GetAPILocationConstituencyIDPathParams = field(default=None)
    

@dataclass
class GetAPILocationConstituencyIDResponse:
    body: bytes = field(default=None)
    constituency_item: Optional[shared.ConstituencyItem] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
