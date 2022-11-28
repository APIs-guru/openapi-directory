from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


FETCH_FORM_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchFormPathParams:
    form_type: shared.FormEnumFormTypesEnum = field(metadata={'path_param': { 'field_name': 'FormType', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFormSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFormRequest:
    path_params: FetchFormPathParams = field()
    security: FetchFormSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFormResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_form: Optional[shared.VerifyV2Form] = field(default=None)
    
