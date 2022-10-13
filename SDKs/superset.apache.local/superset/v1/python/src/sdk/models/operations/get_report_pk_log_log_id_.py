from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetReportPkLogLogIDPathParams:
    log_id: int = field(default=None, metadata={'path_param': { 'field_name': 'log_id', 'style': 'simple', 'explode': False }})
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPkLogLogIDQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetReportPkLogLogIDSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetReportPkLogLogIDRequest:
    path_params: GetReportPkLogLogIDPathParams = field(default=None)
    query_params: GetReportPkLogLogIDQueryParams = field(default=None)
    security: GetReportPkLogLogIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetReportPkLogLogID200ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.ReportExecutionLogRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetReportPkLogLogID400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportPkLogLogID401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportPkLogLogID404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportPkLogLogID422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportPkLogLogID500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetReportPkLogLogIDResponse:
    content_type: str = field(default=None)
    get_report_pk_log_log_id_200_application_json_object: Optional[GetReportPkLogLogID200ApplicationJSON] = field(default=None)
    get_report_pk_log_log_id_400_application_json_object: Optional[GetReportPkLogLogID400ApplicationJSON] = field(default=None)
    get_report_pk_log_log_id_401_application_json_object: Optional[GetReportPkLogLogID401ApplicationJSON] = field(default=None)
    get_report_pk_log_log_id_404_application_json_object: Optional[GetReportPkLogLogID404ApplicationJSON] = field(default=None)
    get_report_pk_log_log_id_422_application_json_object: Optional[GetReportPkLogLogID422ApplicationJSON] = field(default=None)
    get_report_pk_log_log_id_500_application_json_object: Optional[GetReportPkLogLogID500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
