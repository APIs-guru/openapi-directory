from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDashboardExportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDashboardExportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDashboardExport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardExport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardExport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardExport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardExport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDashboardExportRequest:
    query_params: GetDashboardExportQueryParams = field()
    security: GetDashboardExportSecurity = field()
    

@dataclass
class GetDashboardExportResponse:
    content_type: str = field()
    status_code: int = field()
    get_dashboard_export_200_text_plain_string: Optional[str] = field(default=None)
    get_dashboard_export_400_application_json_object: Optional[GetDashboardExport400ApplicationJSON] = field(default=None)
    get_dashboard_export_401_application_json_object: Optional[GetDashboardExport401ApplicationJSON] = field(default=None)
    get_dashboard_export_404_application_json_object: Optional[GetDashboardExport404ApplicationJSON] = field(default=None)
    get_dashboard_export_422_application_json_object: Optional[GetDashboardExport422ApplicationJSON] = field(default=None)
    get_dashboard_export_500_application_json_object: Optional[GetDashboardExport500ApplicationJSON] = field(default=None)
    
