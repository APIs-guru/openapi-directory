from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetBenefitsDocumentUploadStatusPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBenefitsDocumentUploadStatusSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus404ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus429ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class GetBenefitsDocumentUploadStatusRequest:
    path_params: GetBenefitsDocumentUploadStatusPathParams = field()
    security: GetBenefitsDocumentUploadStatusSecurity = field()
    

@dataclass
class GetBenefitsDocumentUploadStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_benefits_document_upload_status_200_application_json_any: Optional[Any] = field(default=None)
    get_benefits_document_upload_status_401_application_json_object: Optional[GetBenefitsDocumentUploadStatus401ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_403_application_json_object: Optional[GetBenefitsDocumentUploadStatus403ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_404_application_json_object: Optional[GetBenefitsDocumentUploadStatus404ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_429_application_json_object: Optional[GetBenefitsDocumentUploadStatus429ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_500_application_json_object: Optional[GetBenefitsDocumentUploadStatus500ApplicationJSON] = field(default=None)
    
