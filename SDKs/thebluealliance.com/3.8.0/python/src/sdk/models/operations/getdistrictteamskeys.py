from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetDistrictTeamsKeysPathParams:
    district_key: str = field(default=None, metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsKeysSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictTeamsKeysRequest:
    path_params: GetDistrictTeamsKeysPathParams = field(default=None)
    headers: GetDistrictTeamsKeysHeaders = field(default=None)
    security: GetDistrictTeamsKeysSecurity = field(default=None)
    

@dataclass
class GetDistrictTeamsKeysResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_district_teams_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
