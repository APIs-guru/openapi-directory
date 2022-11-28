from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamMatchesByYearKeysPathParams:
    team_key: str = field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMatchesByYearKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamMatchesByYearKeysSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamMatchesByYearKeysRequest:
    headers: GetTeamMatchesByYearKeysHeaders = field()
    path_params: GetTeamMatchesByYearKeysPathParams = field()
    security: GetTeamMatchesByYearKeysSecurity = field()
    

@dataclass
class GetTeamMatchesByYearKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_team_matches_by_year_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
