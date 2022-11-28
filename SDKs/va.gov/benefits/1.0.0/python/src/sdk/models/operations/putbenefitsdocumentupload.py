from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutBenefitsDocumentUploadHeaders:
    content_md5: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-MD5', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutBenefitsDocumentUpload401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class PutBenefitsDocumentUpload422ApplicationJSON:
    errors: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclass
class PutBenefitsDocumentUpload429ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class PutBenefitsDocumentUpload500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class PutBenefitsDocumentUploadRequest:
    headers: PutBenefitsDocumentUploadHeaders = field()
    

@dataclass
class PutBenefitsDocumentUploadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    put_benefits_document_upload_401_application_json_object: Optional[PutBenefitsDocumentUpload401ApplicationJSON] = field(default=None)
    put_benefits_document_upload_422_application_json_object: Optional[PutBenefitsDocumentUpload422ApplicationJSON] = field(default=None)
    put_benefits_document_upload_429_application_json_object: Optional[PutBenefitsDocumentUpload429ApplicationJSON] = field(default=None)
    put_benefits_document_upload_500_application_json_object: Optional[PutBenefitsDocumentUpload500ApplicationJSON] = field(default=None)
    
