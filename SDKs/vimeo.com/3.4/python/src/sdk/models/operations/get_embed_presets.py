from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEmbedPresetsPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmbedPresetsQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEmbedPresetsRequest:
    path_params: GetEmbedPresetsPathParams = field()
    query_params: GetEmbedPresetsQueryParams = field()
    

@dataclass
class GetEmbedPresetsResponse:
    content_type: str = field()
    status_code: int = field()
    presets: Optional[List[shared.Presets]] = field(default=None)
    
