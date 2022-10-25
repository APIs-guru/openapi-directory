from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_DIALING_PERMISSIONS_COUNTRY_BULK_UPDATE_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest:
    update_request: str = field(default=None, metadata={'form': { 'field_name': 'UpdateRequest' }})
    

@dataclass
class CreateDialingPermissionsCountryBulkUpdateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDialingPermissionsCountryBulkUpdateRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDialingPermissionsCountryBulkUpdateSecurity = field(default=None)
    

@dataclass
class CreateDialingPermissionsCountryBulkUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_dialing_permissions_dialing_permissions_country_bulk_update: Optional[shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate] = field(default=None)
    
