from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LineTimetableToPathParams:
    from_stop_point_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fromStopPointId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    to_stop_point_id: str = field(default=None, metadata={'path_param': { 'field_name': 'toStopPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineTimetableToRequest:
    path_params: LineTimetableToPathParams = field(default=None)
    

@dataclass
class LineTimetableToResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_timetable_response: Optional[shared.TflAPIPresentationEntitiesTimetableResponse] = field(default=None)
    
