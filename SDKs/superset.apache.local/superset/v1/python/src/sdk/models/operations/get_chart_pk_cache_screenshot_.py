from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetChartPkCacheScreenshotPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartPkCacheScreenshotQueryParams:
    q: Optional[shared.ScreenshotQuerySchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetChartPkCacheScreenshotSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetChartPkCacheScreenshot400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkCacheScreenshot401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkCacheScreenshot404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkCacheScreenshot500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetChartPkCacheScreenshotRequest:
    path_params: GetChartPkCacheScreenshotPathParams = field()
    query_params: GetChartPkCacheScreenshotQueryParams = field()
    security: GetChartPkCacheScreenshotSecurity = field()
    

@dataclass
class GetChartPkCacheScreenshotResponse:
    content_type: str = field()
    status_code: int = field()
    chart_cache_screenshot_response_schema: Optional[shared.ChartCacheScreenshotResponseSchema] = field(default=None)
    get_chart_pk_cache_screenshot_400_application_json_object: Optional[GetChartPkCacheScreenshot400ApplicationJSON] = field(default=None)
    get_chart_pk_cache_screenshot_401_application_json_object: Optional[GetChartPkCacheScreenshot401ApplicationJSON] = field(default=None)
    get_chart_pk_cache_screenshot_404_application_json_object: Optional[GetChartPkCacheScreenshot404ApplicationJSON] = field(default=None)
    get_chart_pk_cache_screenshot_500_application_json_object: Optional[GetChartPkCacheScreenshot500ApplicationJSON] = field(default=None)
    
