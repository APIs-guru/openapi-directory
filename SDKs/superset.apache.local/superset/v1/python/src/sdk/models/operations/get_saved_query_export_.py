from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSavedQueryExportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetSavedQueryExportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetSavedQueryExport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryExport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryExport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryExport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetSavedQueryExportRequest:
    query_params: GetSavedQueryExportQueryParams = field()
    security: GetSavedQueryExportSecurity = field()
    

@dataclass
class GetSavedQueryExportResponse:
    content_type: str = field()
    status_code: int = field()
    get_saved_query_export_200_application_zip_binary_string: Optional[bytes] = field(default=None)
    get_saved_query_export_400_application_json_object: Optional[GetSavedQueryExport400ApplicationJSON] = field(default=None)
    get_saved_query_export_401_application_json_object: Optional[GetSavedQueryExport401ApplicationJSON] = field(default=None)
    get_saved_query_export_404_application_json_object: Optional[GetSavedQueryExport404ApplicationJSON] = field(default=None)
    get_saved_query_export_500_application_json_object: Optional[GetSavedQueryExport500ApplicationJSON] = field(default=None)
    
