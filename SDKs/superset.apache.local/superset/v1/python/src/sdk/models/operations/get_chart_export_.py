from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetChartExportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetChartExportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetChartExport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartExport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartExport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartExport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetChartExportRequest:
    query_params: GetChartExportQueryParams = field()
    security: GetChartExportSecurity = field()
    

@dataclass
class GetChartExportResponse:
    content_type: str = field()
    status_code: int = field()
    get_chart_export_200_application_zip_binary_string: Optional[bytes] = field(default=None)
    get_chart_export_400_application_json_object: Optional[GetChartExport400ApplicationJSON] = field(default=None)
    get_chart_export_401_application_json_object: Optional[GetChartExport401ApplicationJSON] = field(default=None)
    get_chart_export_404_application_json_object: Optional[GetChartExport404ApplicationJSON] = field(default=None)
    get_chart_export_500_application_json_object: Optional[GetChartExport500ApplicationJSON] = field(default=None)
    
