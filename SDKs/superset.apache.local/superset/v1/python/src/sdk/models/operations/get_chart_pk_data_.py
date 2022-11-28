from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetChartPkDataPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartPkDataQueryParams:
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChartPkDataSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetChartPkData400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkData401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkData500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetChartPkDataRequest:
    path_params: GetChartPkDataPathParams = field()
    query_params: GetChartPkDataQueryParams = field()
    security: GetChartPkDataSecurity = field()
    

@dataclass
class GetChartPkDataResponse:
    content_type: str = field()
    status_code: int = field()
    chart_data_async_response_schema: Optional[shared.ChartDataAsyncResponseSchema] = field(default=None)
    chart_data_response_schema: Optional[shared.ChartDataResponseSchema] = field(default=None)
    get_chart_pk_data_400_application_json_object: Optional[GetChartPkData400ApplicationJSON] = field(default=None)
    get_chart_pk_data_401_application_json_object: Optional[GetChartPkData401ApplicationJSON] = field(default=None)
    get_chart_pk_data_500_application_json_object: Optional[GetChartPkData500ApplicationJSON] = field(default=None)
    
