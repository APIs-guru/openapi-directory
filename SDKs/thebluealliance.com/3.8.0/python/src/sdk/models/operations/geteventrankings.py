from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventRankingsPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventRankingsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventRankingsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventRankingsRequest:
    path_params: GetEventRankingsPathParams = field(default=None)
    headers: GetEventRankingsHeaders = field(default=None)
    security: GetEventRankingsSecurity = field(default=None)
    

@dataclass
class GetEventRankingsResponse:
    content_type: str = field(default=None)
    event_ranking: Optional[shared.EventRanking] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
