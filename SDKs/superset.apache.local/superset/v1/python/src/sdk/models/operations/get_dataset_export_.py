from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDatasetExportQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatasetExportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatasetExportRequest:
    query_params: GetDatasetExportQueryParams = field(default=None)
    security: GetDatasetExportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatasetExport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatasetExport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatasetExport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatasetExport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatasetExportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_dataset_export_400_application_json_object: Optional[GetDatasetExport400ApplicationJSON] = field(default=None)
    get_dataset_export_401_application_json_object: Optional[GetDatasetExport401ApplicationJSON] = field(default=None)
    get_dataset_export_404_application_json_object: Optional[GetDatasetExport404ApplicationJSON] = field(default=None)
    get_dataset_export_500_application_json_object: Optional[GetDatasetExport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
