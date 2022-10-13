from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetSavedQueryExportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetSavedQueryExportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSavedQueryExportRequest:
    query_params: GetSavedQueryExportQueryParams = field(default=None)
    security: GetSavedQueryExportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetSavedQueryExport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryExport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryExport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedQueryExport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetSavedQueryExportResponse:
    content_type: str = field(default=None)
    get_saved_query_export_200_application_zip_binary_string: Optional[bytes] = field(default=None)
    get_saved_query_export_400_application_json_object: Optional[GetSavedQueryExport400ApplicationJSON] = field(default=None)
    get_saved_query_export_401_application_json_object: Optional[GetSavedQueryExport401ApplicationJSON] = field(default=None)
    get_saved_query_export_404_application_json_object: Optional[GetSavedQueryExport404ApplicationJSON] = field(default=None)
    get_saved_query_export_500_application_json_object: Optional[GetSavedQueryExport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
