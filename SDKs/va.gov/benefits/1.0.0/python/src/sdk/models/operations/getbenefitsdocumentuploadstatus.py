from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetBenefitsDocumentUploadStatusPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBenefitsDocumentUploadStatusSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBenefitsDocumentUploadStatusRequest:
    path_params: GetBenefitsDocumentUploadStatusPathParams = field(default=None)
    security: GetBenefitsDocumentUploadStatusSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus404ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus429ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatus500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class GetBenefitsDocumentUploadStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_benefits_document_upload_status_200_application_json_any: Optional[Any] = field(default=None)
    get_benefits_document_upload_status_401_application_json_object: Optional[GetBenefitsDocumentUploadStatus401ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_403_application_json_object: Optional[GetBenefitsDocumentUploadStatus403ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_404_application_json_object: Optional[GetBenefitsDocumentUploadStatus404ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_429_application_json_object: Optional[GetBenefitsDocumentUploadStatus429ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_500_application_json_object: Optional[GetBenefitsDocumentUploadStatus500ApplicationJSON] = field(default=None)
    
