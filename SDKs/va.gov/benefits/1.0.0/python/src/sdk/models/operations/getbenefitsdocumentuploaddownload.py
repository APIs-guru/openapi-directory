from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetBenefitsDocumentUploadDownloadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBenefitsDocumentUploadDownloadSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBenefitsDocumentUploadDownloadRequest:
    path_params: GetBenefitsDocumentUploadDownloadPathParams = field(default=None)
    security: GetBenefitsDocumentUploadDownloadSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadDownload401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadDownload403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadDownload404ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadDownload429ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadDownload500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class GetBenefitsDocumentUploadDownloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_benefits_document_upload_download_200_application_zip_binary_string: Optional[bytes] = field(default=None)
    get_benefits_document_upload_download_401_application_json_object: Optional[GetBenefitsDocumentUploadDownload401ApplicationJSON] = field(default=None)
    get_benefits_document_upload_download_403_application_json_object: Optional[GetBenefitsDocumentUploadDownload403ApplicationJSON] = field(default=None)
    get_benefits_document_upload_download_404_application_json_object: Optional[GetBenefitsDocumentUploadDownload404ApplicationJSON] = field(default=None)
    get_benefits_document_upload_download_429_application_json_object: Optional[GetBenefitsDocumentUploadDownload429ApplicationJSON] = field(default=None)
    get_benefits_document_upload_download_500_application_json_object: Optional[GetBenefitsDocumentUploadDownload500ApplicationJSON] = field(default=None)
    
