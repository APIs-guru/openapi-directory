from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutReportPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReportPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PutReportPkRequest:
    path_params: PutReportPkPathParams = field(default=None)
    request: shared.ReportScheduleRestAPIPut = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutReportPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PutReportPk200ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.ReportScheduleRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PutReportPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutReportPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutReportPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutReportPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutReportPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PutReportPkResponse:
    content_type: str = field(default=None)
    put_report_pk_200_application_json_object: Optional[PutReportPk200ApplicationJSON] = field(default=None)
    put_report_pk_400_application_json_object: Optional[PutReportPk400ApplicationJSON] = field(default=None)
    put_report_pk_401_application_json_object: Optional[PutReportPk401ApplicationJSON] = field(default=None)
    put_report_pk_403_application_json_object: Optional[PutReportPk403ApplicationJSON] = field(default=None)
    put_report_pk_404_application_json_object: Optional[PutReportPk404ApplicationJSON] = field(default=None)
    put_report_pk_500_application_json_object: Optional[PutReportPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
