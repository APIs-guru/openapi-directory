from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAdminRequestsUnmatchedNearMisses200ApplicationJSONNearMisses:
    absolute_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absoluteUrl') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    cookies: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookies') }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class GetAdminRequestsUnmatchedNearMisses200ApplicationJSON:
    near_misses: Optional[List[GetAdminRequestsUnmatchedNearMisses200ApplicationJSONNearMisses]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nearMisses') }})
    

@dataclass
class GetAdminRequestsUnmatchedNearMissesResponse:
    content_type: str = field()
    status_code: int = field()
    get_admin_requests_unmatched_near_misses_200_application_json_object: Optional[GetAdminRequestsUnmatchedNearMisses200ApplicationJSON] = field(default=None)
    
