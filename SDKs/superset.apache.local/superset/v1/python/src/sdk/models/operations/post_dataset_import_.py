from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostDatasetImportRequestBodyFormData:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    form_data: str = field(metadata={'multipart_form': { 'field_name': 'formData' }})
    

@dataclass
class PostDatasetImportRequestBody:
    form_data: Optional[PostDatasetImportRequestBodyFormData] = field(default=None, metadata={'multipart_form': { 'file': True }})
    overwrite: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'overwrite' }})
    passwords: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'passwords' }})
    

@dataclass
class PostDatasetImportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostDatasetImport200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatasetImport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatasetImport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatasetImport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatasetImport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostDatasetImportRequest:
    request: PostDatasetImportRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostDatasetImportSecurity = field()
    

@dataclass
class PostDatasetImportResponse:
    content_type: str = field()
    status_code: int = field()
    post_dataset_import_200_application_json_object: Optional[PostDatasetImport200ApplicationJSON] = field(default=None)
    post_dataset_import_400_application_json_object: Optional[PostDatasetImport400ApplicationJSON] = field(default=None)
    post_dataset_import_401_application_json_object: Optional[PostDatasetImport401ApplicationJSON] = field(default=None)
    post_dataset_import_422_application_json_object: Optional[PostDatasetImport422ApplicationJSON] = field(default=None)
    post_dataset_import_500_application_json_object: Optional[PostDatasetImport500ApplicationJSON] = field(default=None)
    
