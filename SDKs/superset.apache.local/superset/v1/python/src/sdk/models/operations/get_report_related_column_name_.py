from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetReportRelatedColumnNamePathParams:
    column_name: str = field(metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportRelatedColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetReportRelatedColumnNameSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetReportRelatedColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportRelatedColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportRelatedColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportRelatedColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetReportRelatedColumnNameRequest:
    path_params: GetReportRelatedColumnNamePathParams = field()
    query_params: GetReportRelatedColumnNameQueryParams = field()
    security: GetReportRelatedColumnNameSecurity = field()
    

@dataclass
class GetReportRelatedColumnNameResponse:
    content_type: str = field()
    status_code: int = field()
    get_report_related_column_name_400_application_json_object: Optional[GetReportRelatedColumnName400ApplicationJSON] = field(default=None)
    get_report_related_column_name_401_application_json_object: Optional[GetReportRelatedColumnName401ApplicationJSON] = field(default=None)
    get_report_related_column_name_404_application_json_object: Optional[GetReportRelatedColumnName404ApplicationJSON] = field(default=None)
    get_report_related_column_name_500_application_json_object: Optional[GetReportRelatedColumnName500ApplicationJSON] = field(default=None)
    related_response_schema: Optional[shared.RelatedResponseSchema] = field(default=None)
    
