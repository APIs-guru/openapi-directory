from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetTeamsKeysPathParams:
    page_num: int = field(default=None, metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since' }})
    

@dataclass
class GetTeamsKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsKeysRequest:
    path_params: GetTeamsKeysPathParams = field(default=None)
    headers: GetTeamsKeysHeaders = field(default=None)
    security: GetTeamsKeysSecurity = field(default=None)
    

@dataclass
class GetTeamsKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_teams_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
