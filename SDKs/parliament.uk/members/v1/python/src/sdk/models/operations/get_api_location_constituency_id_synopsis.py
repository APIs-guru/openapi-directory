from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPILocationConstituencyIDSynopsisPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPILocationConstituencyIDSynopsisRequest:
    path_params: GetAPILocationConstituencyIDSynopsisPathParams = field(default=None)
    

@dataclass
class GetAPILocationConstituencyIDSynopsisResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    string_item: Optional[shared.StringItem] = field(default=None)
    
