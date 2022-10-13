from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteReportPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteReportPkRequest:
    path_params: DeleteReportPkPathParams = field(default=None)
    security: DeleteReportPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteReportPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReportPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReportPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReportPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReportPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteReportPkResponse:
    content_type: str = field(default=None)
    delete_report_pk_200_application_json_object: Optional[DeleteReportPk200ApplicationJSON] = field(default=None)
    delete_report_pk_403_application_json_object: Optional[DeleteReportPk403ApplicationJSON] = field(default=None)
    delete_report_pk_404_application_json_object: Optional[DeleteReportPk404ApplicationJSON] = field(default=None)
    delete_report_pk_422_application_json_object: Optional[DeleteReportPk422ApplicationJSON] = field(default=None)
    delete_report_pk_500_application_json_object: Optional[DeleteReportPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
