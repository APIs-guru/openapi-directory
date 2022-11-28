from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostDashboardImportRequestBodyFormData:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    form_data: str = field(metadata={'multipart_form': { 'field_name': 'formData' }})
    

@dataclass
class PostDashboardImportRequestBody:
    form_data: Optional[PostDashboardImportRequestBodyFormData] = field(default=None, metadata={'multipart_form': { 'file': True }})
    overwrite: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'overwrite' }})
    passwords: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'passwords' }})
    

@dataclass
class PostDashboardImportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostDashboardImport200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDashboardImport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDashboardImport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDashboardImport422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostDashboardImport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostDashboardImportRequest:
    request: PostDashboardImportRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostDashboardImportSecurity = field()
    

@dataclass
class PostDashboardImportResponse:
    content_type: str = field()
    status_code: int = field()
    post_dashboard_import_200_application_json_object: Optional[PostDashboardImport200ApplicationJSON] = field(default=None)
    post_dashboard_import_400_application_json_object: Optional[PostDashboardImport400ApplicationJSON] = field(default=None)
    post_dashboard_import_401_application_json_object: Optional[PostDashboardImport401ApplicationJSON] = field(default=None)
    post_dashboard_import_422_application_json_object: Optional[PostDashboardImport422ApplicationJSON] = field(default=None)
    post_dashboard_import_500_application_json_object: Optional[PostDashboardImport500ApplicationJSON] = field(default=None)
    
