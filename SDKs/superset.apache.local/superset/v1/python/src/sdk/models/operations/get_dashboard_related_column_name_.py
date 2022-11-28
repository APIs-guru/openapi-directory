from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDashboardRelatedColumnNamePathParams:
    column_name: str = field(metadata={'path_param': { 'field_name': 'column_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDashboardRelatedColumnNameQueryParams:
    q: Optional[shared.GetRelatedSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDashboardRelatedColumnNameSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDashboardRelatedColumnName400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardRelatedColumnName401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardRelatedColumnName404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardRelatedColumnName500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDashboardRelatedColumnNameRequest:
    path_params: GetDashboardRelatedColumnNamePathParams = field()
    query_params: GetDashboardRelatedColumnNameQueryParams = field()
    security: GetDashboardRelatedColumnNameSecurity = field()
    

@dataclass
class GetDashboardRelatedColumnNameResponse:
    content_type: str = field()
    status_code: int = field()
    get_dashboard_related_column_name_400_application_json_object: Optional[GetDashboardRelatedColumnName400ApplicationJSON] = field(default=None)
    get_dashboard_related_column_name_401_application_json_object: Optional[GetDashboardRelatedColumnName401ApplicationJSON] = field(default=None)
    get_dashboard_related_column_name_404_application_json_object: Optional[GetDashboardRelatedColumnName404ApplicationJSON] = field(default=None)
    get_dashboard_related_column_name_500_application_json_object: Optional[GetDashboardRelatedColumnName500ApplicationJSON] = field(default=None)
    related_response_schema: Optional[shared.RelatedResponseSchema] = field(default=None)
    
