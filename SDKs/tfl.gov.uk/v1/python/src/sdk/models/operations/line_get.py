from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineGetPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineGetRequest:
    path_params: LineGetPathParams = field()
    

@dataclass
class LineGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
