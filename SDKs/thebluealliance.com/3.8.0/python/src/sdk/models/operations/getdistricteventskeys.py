from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictEventsKeysPathParams:
    district_key: str = field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictEventsKeysHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictEventsKeysSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictEventsKeysRequest:
    headers: GetDistrictEventsKeysHeaders = field()
    path_params: GetDistrictEventsKeysPathParams = field()
    security: GetDistrictEventsKeysSecurity = field()
    

@dataclass
class GetDistrictEventsKeysResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_district_events_keys_200_application_json_strings: Optional[List[str]] = field(default=None)
    
