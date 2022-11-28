from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetChartDataCacheKeyPathParams:
    cache_key: str = field(metadata={'path_param': { 'field_name': 'cache_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartDataCacheKeySecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetChartDataCacheKey400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartDataCacheKey401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartDataCacheKey404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartDataCacheKey422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartDataCacheKey500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetChartDataCacheKeyRequest:
    path_params: GetChartDataCacheKeyPathParams = field()
    security: GetChartDataCacheKeySecurity = field()
    

@dataclass
class GetChartDataCacheKeyResponse:
    content_type: str = field()
    status_code: int = field()
    chart_data_response_schema: Optional[shared.ChartDataResponseSchema] = field(default=None)
    get_chart_data_cache_key_400_application_json_object: Optional[GetChartDataCacheKey400ApplicationJSON] = field(default=None)
    get_chart_data_cache_key_401_application_json_object: Optional[GetChartDataCacheKey401ApplicationJSON] = field(default=None)
    get_chart_data_cache_key_404_application_json_object: Optional[GetChartDataCacheKey404ApplicationJSON] = field(default=None)
    get_chart_data_cache_key_422_application_json_object: Optional[GetChartDataCacheKey422ApplicationJSON] = field(default=None)
    get_chart_data_cache_key_500_application_json_object: Optional[GetChartDataCacheKey500ApplicationJSON] = field(default=None)
    
