from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetAPIV2ListMarketsHeaders:
    x_rapid_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetAPIV2ListMarkets200ApplicationJSONData:
    all: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    allowed_for_your_subscription: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_for_your_subscription') }})
    

@dataclass_json
@dataclass
class GetAPIV2ListMarkets200ApplicationJSON:
    data: Optional[GetAPIV2ListMarkets200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class GetAPIV2ListMarkets404ApplicationJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetAPIV2ListMarketsRequest:
    headers: GetAPIV2ListMarketsHeaders = field()
    

@dataclass
class GetAPIV2ListMarketsResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_v2_list_markets_200_application_json_object: Optional[GetAPIV2ListMarkets200ApplicationJSON] = field(default=None)
    get_api_v2_list_markets_404_application_json_object: Optional[GetAPIV2ListMarkets404ApplicationJSON] = field(default=None)
    
