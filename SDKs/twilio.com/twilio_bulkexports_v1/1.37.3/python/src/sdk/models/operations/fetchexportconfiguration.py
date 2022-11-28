from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_EXPORT_CONFIGURATION_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class FetchExportConfigurationPathParams:
    resource_type: str = field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchExportConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchExportConfigurationRequest:
    path_params: FetchExportConfigurationPathParams = field()
    security: FetchExportConfigurationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchExportConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    bulkexports_v1_export_configuration: Optional[shared.BulkexportsV1ExportConfiguration] = field(default=None)
    
