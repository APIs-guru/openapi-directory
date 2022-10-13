from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostChartDataSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostChartDataRequest:
    request: shared.ChartDataQueryContextSchema = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostChartDataSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostChartData400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostChartData401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostChartData500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostChartDataResponse:
    chart_data_async_response_schema: Optional[shared.ChartDataAsyncResponseSchema] = field(default=None)
    chart_data_response_schema: Optional[shared.ChartDataResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    post_chart_data_400_application_json_object: Optional[PostChartData400ApplicationJSON] = field(default=None)
    post_chart_data_401_application_json_object: Optional[PostChartData401ApplicationJSON] = field(default=None)
    post_chart_data_500_application_json_object: Optional[PostChartData500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
