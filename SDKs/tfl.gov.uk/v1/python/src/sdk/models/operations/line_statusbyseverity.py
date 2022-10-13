from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineStatusBySeverityPathParams:
    severity: int = field(default=None, metadata={'path_param': { 'field_name': 'severity', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineStatusBySeverityRequest:
    path_params: LineStatusBySeverityPathParams = field(default=None)
    

@dataclass
class LineStatusBySeverityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_lines: Optional[List[shared.TflAPIPresentationEntitiesLine]] = field(default=None)
    
