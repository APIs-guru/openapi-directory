from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostChartImportRequestBodyFormData:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    form_data: str = field(default=None, metadata={'multipart_form': { 'field_name': 'formData' }})
    

@dataclass
class PostChartImportRequestBody:
    form_data: Optional[PostChartImportRequestBodyFormData] = field(default=None, metadata={'multipart_form': { 'file': True }})
    overwrite: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'overwrite' }})
    passwords: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'passwords' }})
    

@dataclass
class PostChartImportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostChartImportRequest:
    request: PostChartImportRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostChartImportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostChartImport200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostChartImport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostChartImport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostChartImport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostChartImport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostChartImportResponse:
    content_type: str = field(default=None)
    post_chart_import_200_application_json_object: Optional[PostChartImport200ApplicationJSON] = field(default=None)
    post_chart_import_400_application_json_object: Optional[PostChartImport400ApplicationJSON] = field(default=None)
    post_chart_import_401_application_json_object: Optional[PostChartImport401ApplicationJSON] = field(default=None)
    post_chart_import_422_application_json_object: Optional[PostChartImport422ApplicationJSON] = field(default=None)
    post_chart_import_500_application_json_object: Optional[PostChartImport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
