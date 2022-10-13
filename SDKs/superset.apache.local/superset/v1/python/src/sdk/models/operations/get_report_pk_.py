from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetReportPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportPkQueryParams:
    q: Optional[shared.GetItemSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetReportPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetReportPkRequest:
    path_params: GetReportPkPathParams = field(default=None)
    query_params: GetReportPkQueryParams = field(default=None)
    security: GetReportPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetReportPk200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetReportPk200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetReportPk200ApplicationJSON:
    description_columns: Optional[GetReportPk200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_columns' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label_columns: Optional[GetReportPk200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_columns' }})
    result: Optional[shared.ReportScheduleRestAPIGet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    show_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_columns' }})
    show_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_title' }})
    

@dataclass_json
@dataclass
class GetReportPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetReportPkResponse:
    content_type: str = field(default=None)
    get_report_pk_200_application_json_object: Optional[GetReportPk200ApplicationJSON] = field(default=None)
    get_report_pk_400_application_json_object: Optional[GetReportPk400ApplicationJSON] = field(default=None)
    get_report_pk_401_application_json_object: Optional[GetReportPk401ApplicationJSON] = field(default=None)
    get_report_pk_404_application_json_object: Optional[GetReportPk404ApplicationJSON] = field(default=None)
    get_report_pk_422_application_json_object: Optional[GetReportPk422ApplicationJSON] = field(default=None)
    get_report_pk_500_application_json_object: Optional[GetReportPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
