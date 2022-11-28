from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineStatusByModePathParams:
    modes: List[str] = field(metadata={'path_param': { 'field_name': 'modes', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineStatusByModeQueryParams:
    detail: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'detail', 'style': 'form', 'explode': True }})
    severity_level: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'severityLevel', 'style': 'form', 'explode': True }})
    

@dataclass
class LineStatusByModeRequest:
    path_params: LineStatusByModePathParams = field()
    query_params: LineStatusByModeQueryParams = field()
    

@dataclass
class LineStatusByModeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
