from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetBenefitsDocumentUploadStatusReportSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport200ApplicationJSON:
    data: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport422ApplicationJSON:
    errors: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport429ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    

@dataclass_json
@dataclass
class GetBenefitsDocumentUploadStatusReport500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class GetBenefitsDocumentUploadStatusReportRequest:
    request: shared.DocumentUploadStatusGUIDList = field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetBenefitsDocumentUploadStatusReportSecurity = field()
    

@dataclass
class GetBenefitsDocumentUploadStatusReportResponse:
    content_type: str = field()
    status_code: int = field()
    get_benefits_document_upload_status_report_200_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport200ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_401_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport401ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_403_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport403ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_422_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport422ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_429_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport429ApplicationJSON] = field(default=None)
    get_benefits_document_upload_status_report_500_application_json_object: Optional[GetBenefitsDocumentUploadStatusReport500ApplicationJSON] = field(default=None)
    
