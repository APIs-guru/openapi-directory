from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamYearsParticipatedPathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamYearsParticipatedHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamYearsParticipatedSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamYearsParticipatedRequest:
    headers: GetTeamYearsParticipatedHeaders = field()
    path_params: GetTeamYearsParticipatedPathParams = field()
    security: GetTeamYearsParticipatedSecurity = field()
    

@dataclass
class GetTeamYearsParticipatedResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_team_years_participated_200_application_json_integers: Optional[List[int]] = field(default=None)
    
