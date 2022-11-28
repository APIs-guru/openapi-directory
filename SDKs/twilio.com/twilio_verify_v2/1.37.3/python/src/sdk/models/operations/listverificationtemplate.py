from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_VERIFICATION_TEMPLATE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListVerificationTemplateQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVerificationTemplateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListVerificationTemplateListVerificationTemplateResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListVerificationTemplateListVerificationTemplateResponse:
    meta: Optional[ListVerificationTemplateListVerificationTemplateResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    templates: Optional[List[shared.VerifyV2VerificationTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templates') }})
    

@dataclass
class ListVerificationTemplateRequest:
    query_params: ListVerificationTemplateQueryParams = field()
    security: ListVerificationTemplateSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListVerificationTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    list_verification_template_response: Optional[ListVerificationTemplateListVerificationTemplateResponse] = field(default=None)
    
