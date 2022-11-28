from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostReportSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostReport201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.ReportScheduleRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PostReport400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostReport401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostReport404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostReport500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostReportRequest:
    request: shared.ReportScheduleRestAPIPost = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostReportSecurity = field()
    

@dataclass
class PostReportResponse:
    content_type: str = field()
    status_code: int = field()
    post_report_201_application_json_object: Optional[PostReport201ApplicationJSON] = field(default=None)
    post_report_400_application_json_object: Optional[PostReport400ApplicationJSON] = field(default=None)
    post_report_401_application_json_object: Optional[PostReport401ApplicationJSON] = field(default=None)
    post_report_404_application_json_object: Optional[PostReport404ApplicationJSON] = field(default=None)
    post_report_500_application_json_object: Optional[PostReport500ApplicationJSON] = field(default=None)
    
