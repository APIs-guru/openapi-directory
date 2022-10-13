from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetChartRelatedColumnNamePathParams:
    column_name: str = field(default=None, metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartRelatedColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetChartRelatedColumnNameSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetChartRelatedColumnNameRequest:
    path_params: GetChartRelatedColumnNamePathParams = field(default=None)
    query_params: GetChartRelatedColumnNameQueryParams = field(default=None)
    security: GetChartRelatedColumnNameSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetChartRelatedColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartRelatedColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartRelatedColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartRelatedColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetChartRelatedColumnNameResponse:
    content_type: str = field(default=None)
    get_chart_related_column_name_400_application_json_object: Optional[GetChartRelatedColumnName400ApplicationJSON] = field(default=None)
    get_chart_related_column_name_401_application_json_object: Optional[GetChartRelatedColumnName401ApplicationJSON] = field(default=None)
    get_chart_related_column_name_404_application_json_object: Optional[GetChartRelatedColumnName404ApplicationJSON] = field(default=None)
    get_chart_related_column_name_500_application_json_object: Optional[GetChartRelatedColumnName500ApplicationJSON] = field(default=None)
    related_response_schema: Optional[shared.RelatedResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
