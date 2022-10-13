from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTeamYearsParticipatedPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamYearsParticipatedHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamYearsParticipatedSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamYearsParticipatedRequest:
    path_params: GetTeamYearsParticipatedPathParams = field(default=None)
    headers: GetTeamYearsParticipatedHeaders = field(default=None)
    security: GetTeamYearsParticipatedSecurity = field(default=None)
    

@dataclass
class GetTeamYearsParticipatedResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_team_years_participated_200_application_json_integers: Optional[List[int]] = field(default=None)
    
