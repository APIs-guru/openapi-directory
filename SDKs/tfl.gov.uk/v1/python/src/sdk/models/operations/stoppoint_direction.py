from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StopPointDirectionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    to_stop_point_id: str = field(default=None, metadata={'path_param': { 'field_name': 'toStopPointId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointDirectionQueryParams:
    line_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lineId', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointDirectionRequest:
    path_params: StopPointDirectionPathParams = field(default=None)
    query_params: StopPointDirectionQueryParams = field(default=None)
    

@dataclass
class StopPointDirectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stop_point_direction_200_application_json_string: Optional[str] = field(default=None)
    stop_point_direction_200_application_xml_string: Optional[str] = field(default=None)
    stop_point_direction_200_text_json_string: Optional[str] = field(default=None)
    stop_point_direction_200_text_xml_string: Optional[str] = field(default=None)
    
