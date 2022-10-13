from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
FETCH_FORM_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchFormPathParams:
    form_type: shared.FormEnumFormTypesEnum = field(default=None, metadata={'path_param': { 'field_name': 'FormType', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFormSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFormRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchFormPathParams = field(default=None)
    security: FetchFormSecurity = field(default=None)
    

@dataclass
class FetchFormResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_form: Optional[shared.VerifyV2Form] = field(default=None)
    
