from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatabaseExportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatabaseExportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatabaseExport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabaseExport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabaseExport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatabaseExportRequest:
    query_params: GetDatabaseExportQueryParams = field()
    security: GetDatabaseExportSecurity = field()
    

@dataclass
class GetDatabaseExportResponse:
    content_type: str = field()
    status_code: int = field()
    get_database_export_200_application_zip_binary_string: Optional[bytes] = field(default=None)
    get_database_export_401_application_json_object: Optional[GetDatabaseExport401ApplicationJSON] = field(default=None)
    get_database_export_404_application_json_object: Optional[GetDatabaseExport404ApplicationJSON] = field(default=None)
    get_database_export_500_application_json_object: Optional[GetDatabaseExport500ApplicationJSON] = field(default=None)
    
