from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictTeamsKeysPathParams:
    district_key: str = field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictTeamsKeysSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictTeamsKeysRequest:
    headers: GetDistrictTeamsKeysHeaders = field()
    path_params: GetDistrictTeamsKeysPathParams = field()
    security: GetDistrictTeamsKeysSecurity = field()
    

@dataclass
class GetDistrictTeamsKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_district_teams_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
