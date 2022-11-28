from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostBenefitsDocumentUploadSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class PostBenefitsDocumentUpload202ApplicationJSON:
    data: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class PostBenefitsDocumentUpload401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class PostBenefitsDocumentUpload403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class PostBenefitsDocumentUpload422ApplicationJSON:
    errors: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclass
class PostBenefitsDocumentUpload429ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class PostBenefitsDocumentUpload500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class PostBenefitsDocumentUploadRequest:
    security: PostBenefitsDocumentUploadSecurity = field()
    

@dataclass
class PostBenefitsDocumentUploadResponse:
    content_type: str = field()
    status_code: int = field()
    post_benefits_document_upload_202_application_json_object: Optional[PostBenefitsDocumentUpload202ApplicationJSON] = field(default=None)
    post_benefits_document_upload_401_application_json_object: Optional[PostBenefitsDocumentUpload401ApplicationJSON] = field(default=None)
    post_benefits_document_upload_403_application_json_object: Optional[PostBenefitsDocumentUpload403ApplicationJSON] = field(default=None)
    post_benefits_document_upload_422_application_json_object: Optional[PostBenefitsDocumentUpload422ApplicationJSON] = field(default=None)
    post_benefits_document_upload_429_application_json_object: Optional[PostBenefitsDocumentUpload429ApplicationJSON] = field(default=None)
    post_benefits_document_upload_500_application_json_object: Optional[PostBenefitsDocumentUpload500ApplicationJSON] = field(default=None)
    
