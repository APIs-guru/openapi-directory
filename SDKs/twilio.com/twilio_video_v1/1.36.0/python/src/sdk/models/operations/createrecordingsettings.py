from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_RECORDING_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class CreateRecordingSettingsCreateRecordingSettingsRequest:
    aws_credentials_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AwsCredentialsSid' }})
    aws_s3_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AwsS3Url' }})
    aws_storage_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AwsStorageEnabled' }})
    encryption_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EncryptionEnabled' }})
    encryption_key_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EncryptionKeySid' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateRecordingSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRecordingSettingsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateRecordingSettingsCreateRecordingSettingsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateRecordingSettingsSecurity = field(default=None)
    

@dataclass
class CreateRecordingSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_recording_settings: Optional[shared.VideoV1RecordingSettings] = field(default=None)
    
