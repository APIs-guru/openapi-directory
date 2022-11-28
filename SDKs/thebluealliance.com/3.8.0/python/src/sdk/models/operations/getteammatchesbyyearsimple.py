from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMatchesByYearSimplePathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMatchesByYearSimpleHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMatchesByYearSimpleSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMatchesByYearSimpleRequest:
    headers: GetTeamMatchesByYearSimpleHeaders = field()
    path_params: GetTeamMatchesByYearSimplePathParams = field()
    security: GetTeamMatchesByYearSimpleSecurity = field()
    

@dataclass
class GetTeamMatchesByYearSimpleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    match_simples: Optional[List[shared.MatchSimple]] = field(default=None)
    
