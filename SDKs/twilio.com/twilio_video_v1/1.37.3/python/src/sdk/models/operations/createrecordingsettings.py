from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_RECORDING_SETTINGS_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class CreateRecordingSettingsCreateRecordingSettingsRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    aws_credentials_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AwsCredentialsSid' }})
    aws_s3_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AwsS3Url' }})
    aws_storage_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AwsStorageEnabled' }})
    encryption_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'EncryptionEnabled' }})
    encryption_key_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'EncryptionKeySid' }})
    

@dataclass
class CreateRecordingSettingsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateRecordingSettingsRequest:
    security: CreateRecordingSettingsSecurity = field()
    request: Optional[CreateRecordingSettingsCreateRecordingSettingsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateRecordingSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_recording_settings: Optional[shared.VideoV1RecordingSettings] = field(default=None)
    
