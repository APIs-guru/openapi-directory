from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineStatusBySeverityPathParams:
    severity: int = field(metadata={'path_param': { 'field_name': 'severity', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineStatusBySeverityRequest:
    path_params: LineStatusBySeverityPathParams = field()
    

@dataclass
class LineStatusBySeverityResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
