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
class UpdateExportConfigurationRequestBodyUpdateExportConfigurationRequest:
    enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    webhook_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclass
class UpdateExportConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateExportConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateExportConfigurationPathParams = field(default=None)
    request: Optional[UpdateExportConfigurationRequestBodyUpdateExportConfigurationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateExportConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateExportConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bulkexports_v1_export_configuration: Optional[shared.BulkexportsV1ExportConfiguration] = field(default=None)
    
