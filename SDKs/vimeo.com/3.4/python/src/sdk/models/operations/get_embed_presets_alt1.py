from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEmbedPresetsAlt1QueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEmbedPresetsAlt1Request:
    query_params: GetEmbedPresetsAlt1QueryParams = field()
    

@dataclass
class GetEmbedPresetsAlt1Response:
    content_type: str = field()
    status_code: int = field()
    presets: Optional[List[shared.Presets]] = field(default=None)
    
