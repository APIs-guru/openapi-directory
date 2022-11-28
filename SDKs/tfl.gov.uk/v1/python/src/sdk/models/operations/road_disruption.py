from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RoadDisruptionPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class RoadDisruptionQueryParams:
    categories: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'categories', 'style': 'form', 'explode': True }})
    closures: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'closures', 'style': 'form', 'explode': True }})
    severities: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'severities', 'style': 'form', 'explode': True }})
    strip_content: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stripContent', 'style': 'form', 'explode': True }})
    

@dataclass
class RoadDisruptionRequest:
    path_params: RoadDisruptionPathParams = field()
    query_params: RoadDisruptionQueryParams = field()
    

@dataclass
class RoadDisruptionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_road_disruptions: Optional[List[shared.TflAPIPresentationEntitiesRoadDisruption]] = field(default=None)
    
