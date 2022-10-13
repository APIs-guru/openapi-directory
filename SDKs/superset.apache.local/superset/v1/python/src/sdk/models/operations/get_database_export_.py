from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDatabaseExportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatabaseExportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabaseExportRequest:
    query_params: GetDatabaseExportQueryParams = field(default=None)
    security: GetDatabaseExportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabaseExport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabaseExport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabaseExport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabaseExportResponse:
    content_type: str = field(default=None)
    get_database_export_200_application_zip_binary_string: Optional[bytes] = field(default=None)
    get_database_export_401_application_json_object: Optional[GetDatabaseExport401ApplicationJSON] = field(default=None)
    get_database_export_404_application_json_object: Optional[GetDatabaseExport404ApplicationJSON] = field(default=None)
    get_database_export_500_application_json_object: Optional[GetDatabaseExport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
