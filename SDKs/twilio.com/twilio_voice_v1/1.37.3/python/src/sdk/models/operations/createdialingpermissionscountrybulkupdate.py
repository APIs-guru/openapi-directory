from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


CREATE_DIALING_PERMISSIONS_COUNTRY_BULK_UPDATE_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest:
    update_request: str = field(metadata={'form': { 'field_name': 'UpdateRequest' }})
    

@dataclass
class CreateDialingPermissionsCountryBulkUpdateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDialingPermissionsCountryBulkUpdateRequest:
    security: CreateDialingPermissionsCountryBulkUpdateSecurity = field()
    request: Optional[CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateDialingPermissionsCountryBulkUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_dialing_permissions_dialing_permissions_country_bulk_update: Optional[shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate] = field(default=None)
    
