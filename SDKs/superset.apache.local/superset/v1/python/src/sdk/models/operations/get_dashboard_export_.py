from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDashboardExportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDashboardExportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDashboardExportRequest:
    query_params: GetDashboardExportQueryParams = field(default=None)
    security: GetDashboardExportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDashboardExport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardExport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardExport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardExport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardExport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDashboardExportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_dashboard_export_400_application_json_object: Optional[GetDashboardExport400ApplicationJSON] = field(default=None)
    get_dashboard_export_401_application_json_object: Optional[GetDashboardExport401ApplicationJSON] = field(default=None)
    get_dashboard_export_404_application_json_object: Optional[GetDashboardExport404ApplicationJSON] = field(default=None)
    get_dashboard_export_422_application_json_object: Optional[GetDashboardExport422ApplicationJSON] = field(default=None)
    get_dashboard_export_500_application_json_object: Optional[GetDashboardExport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
