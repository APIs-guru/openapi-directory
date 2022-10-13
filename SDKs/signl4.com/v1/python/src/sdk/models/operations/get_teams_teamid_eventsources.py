from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDEventSourcesPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDEventSourcesRequest:
    path_params: GetTeamsTeamIDEventSourcesPathParams = field(default=None)
    

@dataclass
class GetTeamsTeamIDEventSourcesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    event_source_endpoint_infos: Optional[List[shared.EventSourceEndpointInfo]] = field(default=None)
    status_code: int = field(default=None)
    
