from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDEventSourcesPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDEventSourcesRequest:
    path_params: GetTeamsTeamIDEventSourcesPathParams = field()
    

@dataclass
class GetTeamsTeamIDEventSourcesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    event_source_endpoint_infos: Optional[List[shared.EventSourceEndpointInfo]] = field(default=None)
    
