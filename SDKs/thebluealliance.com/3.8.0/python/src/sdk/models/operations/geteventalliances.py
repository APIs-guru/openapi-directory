from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventAlliancesPathParams:
    event_key: str = field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventAlliancesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventAlliancesSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventAlliancesRequest:
    headers: GetEventAlliancesHeaders = field()
    path_params: GetEventAlliancesPathParams = field()
    security: GetEventAlliancesSecurity = field()
    

@dataclass
class GetEventAlliancesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    elimination_alliances: Optional[List[shared.EliminationAlliance]] = field(default=None)
    
