from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetEventPredictionsPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventPredictionsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventPredictionsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventPredictionsRequest:
    path_params: GetEventPredictionsPathParams = field(default=None)
    headers: GetEventPredictionsHeaders = field(default=None)
    security: GetEventPredictionsSecurity = field(default=None)
    

@dataclass
class GetEventPredictionsResponse:
    content_type: str = field(default=None)
    event_predictions: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
