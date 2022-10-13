from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostSavedQueryImportRequestBodyFormData:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    form_data: str = field(default=None, metadata={'multipart_form': { 'field_name': 'formData' }})
    

@dataclass
class PostSavedQueryImportRequestBody:
    form_data: Optional[PostSavedQueryImportRequestBodyFormData] = field(default=None, metadata={'multipart_form': { 'file': True }})
    overwrite: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'overwrite' }})
    passwords: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'passwords' }})
    

@dataclass
class PostSavedQueryImportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostSavedQueryImportRequest:
    request: PostSavedQueryImportRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostSavedQueryImportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostSavedQueryImport200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostSavedQueryImportResponse:
    content_type: str = field(default=None)
    post_saved_query_import_200_application_json_object: Optional[PostSavedQueryImport200ApplicationJSON] = field(default=None)
    post_saved_query_import_400_application_json_object: Optional[PostSavedQueryImport400ApplicationJSON] = field(default=None)
    post_saved_query_import_401_application_json_object: Optional[PostSavedQueryImport401ApplicationJSON] = field(default=None)
    post_saved_query_import_422_application_json_object: Optional[PostSavedQueryImport422ApplicationJSON] = field(default=None)
    post_saved_query_import_500_application_json_object: Optional[PostSavedQueryImport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
