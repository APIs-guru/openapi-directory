from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutBenefitsDocumentUploadHeaders:
    content_md5: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-MD5' }})
    

@dataclass
class PutBenefitsDocumentUploadRequest:
    headers: PutBenefitsDocumentUploadHeaders = field(default=None)
    

@dataclass_json
@dataclass
class PutBenefitsDocumentUpload401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class PutBenefitsDocumentUpload422ApplicationJSON:
    errors: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass_json
@dataclass
class PutBenefitsDocumentUpload429ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class PutBenefitsDocumentUpload500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PutBenefitsDocumentUploadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    put_benefits_document_upload_401_application_json_object: Optional[PutBenefitsDocumentUpload401ApplicationJSON] = field(default=None)
    put_benefits_document_upload_422_application_json_object: Optional[PutBenefitsDocumentUpload422ApplicationJSON] = field(default=None)
    put_benefits_document_upload_429_application_json_object: Optional[PutBenefitsDocumentUpload429ApplicationJSON] = field(default=None)
    put_benefits_document_upload_500_application_json_object: Optional[PutBenefitsDocumentUpload500ApplicationJSON] = field(default=None)
    
