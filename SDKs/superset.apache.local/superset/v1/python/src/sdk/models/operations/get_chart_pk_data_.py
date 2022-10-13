from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetChartPkDataPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartPkDataQueryParams:
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChartPkDataSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetChartPkDataRequest:
    path_params: GetChartPkDataPathParams = field(default=None)
    query_params: GetChartPkDataQueryParams = field(default=None)
    security: GetChartPkDataSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetChartPkData400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartPkData401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartPkData500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetChartPkDataResponse:
    chart_data_async_response_schema: Optional[shared.ChartDataAsyncResponseSchema] = field(default=None)
    chart_data_response_schema: Optional[shared.ChartDataResponseSchema] = field(default=None)
    content_type: str = field(default=None)
    get_chart_pk_data_400_application_json_object: Optional[GetChartPkData400ApplicationJSON] = field(default=None)
    get_chart_pk_data_401_application_json_object: Optional[GetChartPkData401ApplicationJSON] = field(default=None)
    get_chart_pk_data_500_application_json_object: Optional[GetChartPkData500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
