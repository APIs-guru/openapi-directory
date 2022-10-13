from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_EXPORT_CONFIGURATION_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class UpdateExportConfigurationPathParams:
    resource_type: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateExportConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateExportConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateExportConfigurationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateExportConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateExportConfigurationResponses:
    bulkexports_v1_export_configuration: Optional[shared.BulkexportsV1ExportConfiguration] = field(default=None)
    

@dataclass
class UpdateExportConfigurationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateExportConfigurationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
