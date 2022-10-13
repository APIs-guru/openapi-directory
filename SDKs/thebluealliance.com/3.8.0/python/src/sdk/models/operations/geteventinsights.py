from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventInsightsPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventInsightsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventInsightsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventInsightsRequest:
    path_params: GetEventInsightsPathParams = field(default=None)
    headers: GetEventInsightsHeaders = field(default=None)
    security: GetEventInsightsSecurity = field(default=None)
    

@dataclass
class GetEventInsightsResponse:
    content_type: str = field(default=None)
    event_insights: Optional[shared.EventInsights] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
