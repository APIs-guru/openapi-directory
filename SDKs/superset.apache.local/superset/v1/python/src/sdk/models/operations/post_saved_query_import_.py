from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostSavedQueryImportRequestBodyFormData:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    form_data: str = field(metadata={'multipart_form': { 'field_name': 'formData' }})
    

@dataclass
class PostSavedQueryImportRequestBody:
    form_data: Optional[PostSavedQueryImportRequestBodyFormData] = field(default=None, metadata={'multipart_form': { 'file': True }})
    overwrite: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'overwrite' }})
    passwords: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'passwords' }})
    

@dataclass
class PostSavedQueryImportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostSavedQueryImport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostSavedQueryImportRequest:
    request: PostSavedQueryImportRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostSavedQueryImportSecurity = field()
    

@dataclass
class PostSavedQueryImportResponse:
    content_type: str = field()
    status_code: int = field()
    post_saved_query_import_200_application_json_object: Optional[PostSavedQueryImport200ApplicationJSON] = field(default=None)
    post_saved_query_import_400_application_json_object: Optional[PostSavedQueryImport400ApplicationJSON] = field(default=None)
    post_saved_query_import_401_application_json_object: Optional[PostSavedQueryImport401ApplicationJSON] = field(default=None)
    post_saved_query_import_422_application_json_object: Optional[PostSavedQueryImport422ApplicationJSON] = field(default=None)
    post_saved_query_import_500_application_json_object: Optional[PostSavedQueryImport500ApplicationJSON] = field(default=None)
    
