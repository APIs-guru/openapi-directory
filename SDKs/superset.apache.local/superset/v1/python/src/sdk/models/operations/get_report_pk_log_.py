from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetReportPkLogPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPkLogQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetReportPkLogSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetReportPkLog200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    result: Optional[List[shared.ReportExecutionLogRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class GetReportPkLog400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportPkLog401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportPkLog422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportPkLog500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetReportPkLogRequest:
    path_params: GetReportPkLogPathParams = field()
    query_params: GetReportPkLogQueryParams = field()
    security: GetReportPkLogSecurity = field()
    

@dataclass
class GetReportPkLogResponse:
    content_type: str = field()
    status_code: int = field()
    get_report_pk_log_200_application_json_object: Optional[GetReportPkLog200ApplicationJSON] = field(default=None)
    get_report_pk_log_400_application_json_object: Optional[GetReportPkLog400ApplicationJSON] = field(default=None)
    get_report_pk_log_401_application_json_object: Optional[GetReportPkLog401ApplicationJSON] = field(default=None)
    get_report_pk_log_422_application_json_object: Optional[GetReportPkLog422ApplicationJSON] = field(default=None)
    get_report_pk_log_500_application_json_object: Optional[GetReportPkLog500ApplicationJSON] = field(default=None)
    
