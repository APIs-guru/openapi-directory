from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetBenefitsDocumentUploadStatusReportSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBenefitsDocumentUploadStatusReportRequest:
    request: shared.DocumentUploadStatusGUIDList = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetBenefitsDocumentUploadStatusReportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport200ApplicationJSON:
    data: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport422ApplicationJSON:
    errors: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport429ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class GetBenefitsDocumentUploadStatusReportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_benefits_document_upload_status_report_200_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport200ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_401_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport401ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_403_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport403ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_422_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport422ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_429_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport429ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_500_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport500ApplicationJSON] = field(default=None)
    
