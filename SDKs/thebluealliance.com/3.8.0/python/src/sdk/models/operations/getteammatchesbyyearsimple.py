from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMatchesByYearSimplePathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMatchesByYearSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamMatchesByYearSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMatchesByYearSimpleRequest:
    path_params: GetTeamMatchesByYearSimplePathParams = field(default=None)
    headers: GetTeamMatchesByYearSimpleHeaders = field(default=None)
    security: GetTeamMatchesByYearSimpleSecurity = field(default=None)
    

@dataclass
class GetTeamMatchesByYearSimpleResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    match_simples: Optional[List[shared.MatchSimple]] = field(default=None)
    status_code: int = field(default=None)
    
