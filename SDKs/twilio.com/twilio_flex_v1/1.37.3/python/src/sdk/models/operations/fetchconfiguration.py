from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONFIGURATION_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class FetchConfigurationQueryParams:
    ui_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UiVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConfigurationRequest:
    query_params: FetchConfigurationQueryParams = field()
    security: FetchConfigurationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_configuration: Optional[shared.FlexV1Configuration] = field(default=None)
    
