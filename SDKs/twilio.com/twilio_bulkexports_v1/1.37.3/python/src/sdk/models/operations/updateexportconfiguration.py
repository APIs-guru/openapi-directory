from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_EXPORT_CONFIGURATION_SERVERS = [
	"https://bulkexports.twilio.com",
]


@dataclass
class UpdateExportConfigurationPathParams:
    resource_type: str = field(metadata={'path_param': { 'field_name': 'ResourceType', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateExportConfigurationUpdateExportConfigurationRequest:
    enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    webhook_method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookMethod' }})
    webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'WebhookUrl' }})
    

@dataclass
class UpdateExportConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateExportConfigurationRequest:
    path_params: UpdateExportConfigurationPathParams = field()
    security: UpdateExportConfigurationSecurity = field()
    request: Optional[UpdateExportConfigurationUpdateExportConfigurationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateExportConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    bulkexports_v1_export_configuration: Optional[shared.BulkexportsV1ExportConfiguration] = field(default=None)
    
