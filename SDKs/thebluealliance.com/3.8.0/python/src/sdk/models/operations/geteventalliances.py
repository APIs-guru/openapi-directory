from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventAlliancesPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventAlliancesHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetEventAlliancesSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventAlliancesRequest:
    path_params: GetEventAlliancesPathParams = field(default=None)
    headers: GetEventAlliancesHeaders = field(default=None)
    security: GetEventAlliancesSecurity = field(default=None)
    

@dataclass
class GetEventAlliancesResponse:
    content_type: str = field(default=None)
    elimination_alliances: Optional[List[shared.EliminationAlliance]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
