from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostDatabaseImportRequestBodyFormData:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    form_data: str = field(metadata={'multipart_form': { 'field_name': 'formData' }})
    

@dataclass
class PostDatabaseImportRequestBody:
    form_data: Optional[PostDatabaseImportRequestBodyFormData] = field(default=None, metadata={'multipart_form': { 'file': True }})
    overwrite: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'overwrite' }})
    passwords: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'passwords' }})
    

@dataclass
class PostDatabaseImportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostDatabaseImport200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabaseImport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabaseImport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabaseImport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDatabaseImport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostDatabaseImportRequest:
    request: PostDatabaseImportRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostDatabaseImportSecurity = field()
    

@dataclass
class PostDatabaseImportResponse:
    content_type: str = field()
    status_code: int = field()
    post_database_import_200_application_json_object: Optional[PostDatabaseImport200ApplicationJSON] = field(default=None)
    post_database_import_400_application_json_object: Optional[PostDatabaseImport400ApplicationJSON] = field(default=None)
    post_database_import_401_application_json_object: Optional[PostDatabaseImport401ApplicationJSON] = field(default=None)
    post_database_import_422_application_json_object: Optional[PostDatabaseImport422ApplicationJSON] = field(default=None)
    post_database_import_500_application_json_object: Optional[PostDatabaseImport500ApplicationJSON] = field(default=None)
    
