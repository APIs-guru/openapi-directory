from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostDatasetImportRequestBodyFormData:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    form_data: str = field(default=None, metadata={'multipart_form': { 'field_name': 'formData' }})
    

@dataclass
class PostDatasetImportRequestBody:
    form_data: Optional[PostDatasetImportRequestBodyFormData] = field(default=None, metadata={'multipart_form': { 'file': True }})
    overwrite: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'overwrite' }})
    passwords: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'passwords' }})
    

@dataclass
class PostDatasetImportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostDatasetImportRequest:
    request: PostDatasetImportRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostDatasetImportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostDatasetImport200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatasetImport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatasetImport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatasetImport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDatasetImport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostDatasetImportResponse:
    content_type: str = field(default=None)
    post_dataset_import_200_application_json_object: Optional[PostDatasetImport200ApplicationJSON] = field(default=None)
    post_dataset_import_400_application_json_object: Optional[PostDatasetImport400ApplicationJSON] = field(default=None)
    post_dataset_import_401_application_json_object: Optional[PostDatasetImport401ApplicationJSON] = field(default=None)
    post_dataset_import_422_application_json_object: Optional[PostDatasetImport422ApplicationJSON] = field(default=None)
    post_dataset_import_500_application_json_object: Optional[PostDatasetImport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
