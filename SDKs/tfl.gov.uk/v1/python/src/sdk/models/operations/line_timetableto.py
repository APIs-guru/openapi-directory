from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LineTimetableToPathParams:
    from_stop_point_id: str = field(metadata={'path_param': { 'field_name': 'fromStopPointId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    to_stop_point_id: str = field(metadata={'path_param': { 'field_name': 'toStopPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineTimetableToRequest:
    path_params: LineTimetableToPathParams = field()
    

@dataclass
class LineTimetableToResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_timetable_response: Optional[shared.TflAPIPresentationEntitiesTimetableResponse] = field(default=None)
    
