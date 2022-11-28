from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StopPointDirectionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    to_stop_point_id: str = field(metadata={'path_param': { 'field_name': 'toStopPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointDirectionQueryParams:
    line_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lineId', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointDirectionRequest:
    path_params: StopPointDirectionPathParams = field()
    query_params: StopPointDirectionQueryParams = field()
    

@dataclass
class StopPointDirectionResponse:
    content_type: str = field()
    status_code: int = field()
    stop_point_direction_200_application_json_string: Optional[str] = field(default=None)
    stop_point_direction_200_application_xml_string: Optional[str] = field(default=None)
    stop_point_direction_200_text_json_string: Optional[str] = field(default=None)
    stop_point_direction_200_text_xml_string: Optional[str] = field(default=None)
    
