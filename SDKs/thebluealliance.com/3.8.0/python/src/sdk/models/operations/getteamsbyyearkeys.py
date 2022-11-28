from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamsByYearKeysPathParams:
    page_num: int = field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsByYearKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsByYearKeysSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsByYearKeysRequest:
    headers: GetTeamsByYearKeysHeaders = field()
    path_params: GetTeamsByYearKeysPathParams = field()
    security: GetTeamsByYearKeysSecurity = field()
    

@dataclass
class GetTeamsByYearKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_teams_by_year_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
