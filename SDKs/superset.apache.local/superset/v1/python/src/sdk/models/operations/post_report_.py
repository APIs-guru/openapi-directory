from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostReportSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostReportRequest:
    request: shared.ReportScheduleRestAPIPost = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostReportSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostReport201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.ReportScheduleRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PostReport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostReport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostReport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostReport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostReportResponse:
    content_type: str = field(default=None)
    post_report_201_application_json_object: Optional[PostReport201ApplicationJSON] = field(default=None)
    post_report_400_application_json_object: Optional[PostReport400ApplicationJSON] = field(default=None)
    post_report_401_application_json_object: Optional[PostReport401ApplicationJSON] = field(default=None)
    post_report_404_application_json_object: Optional[PostReport404ApplicationJSON] = field(default=None)
    post_report_500_application_json_object: Optional[PostReport500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
