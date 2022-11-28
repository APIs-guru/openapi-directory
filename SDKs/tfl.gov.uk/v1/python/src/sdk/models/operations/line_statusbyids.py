from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineStatusByIdsPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineStatusByIdsQueryParams:
    detail: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'detail', 'style': 'form', 'explode': True }})
    

@dataclass
class LineStatusByIdsRequest:
    path_params: LineStatusByIdsPathParams = field()
    query_params: LineStatusByIdsQueryParams = field()
    

@dataclass
class LineStatusByIdsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
