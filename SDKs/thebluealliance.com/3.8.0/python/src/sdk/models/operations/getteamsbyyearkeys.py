from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTeamsByYearKeysPathParams:
    page_num: int = field(default=None, metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsByYearKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsByYearKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsByYearKeysRequest:
    path_params: GetTeamsByYearKeysPathParams = field(default=None)
    headers: GetTeamsByYearKeysHeaders = field(default=None)
    security: GetTeamsByYearKeysSecurity = field(default=None)
    

@dataclass
class GetTeamsByYearKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_teams_by_year_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
