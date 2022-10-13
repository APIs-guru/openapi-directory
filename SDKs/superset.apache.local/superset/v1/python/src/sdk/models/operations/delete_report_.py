from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteReportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteReportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteReportRequest:
    query_params: DeleteReportQueryParams = field(default=None)
    security: DeleteReportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteReport200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReport403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteReport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteReportResponse:
    content_type: str = field(default=None)
    delete_report_200_application_json_object: Optional[DeleteReport200ApplicationJSON] = field(default=None)
    delete_report_401_application_json_object: Optional[DeleteReport401ApplicationJSON] = field(default=None)
    delete_report_403_application_json_object: Optional[DeleteReport403ApplicationJSON] = field(default=None)
    delete_report_404_application_json_object: Optional[DeleteReport404ApplicationJSON] = field(default=None)
    delete_report_422_application_json_object: Optional[DeleteReport422ApplicationJSON] = field(default=None)
    delete_report_500_application_json_object: Optional[DeleteReport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
