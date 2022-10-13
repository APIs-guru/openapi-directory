from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DIALING_PERMISSIONS_COUNTRY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchDialingPermissionsCountryPathParams:
    iso_code: str = field(default=None, metadata={'path_param': { 'field_name': 'IsoCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDialingPermissionsCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDialingPermissionsCountryRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDialingPermissionsCountryPathParams = field(default=None)
    security: FetchDialingPermissionsCountrySecurity = field(default=None)
    

@dataclass
class FetchDialingPermissionsCountryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_dialing_permissions_dialing_permissions_country_instance: Optional[shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance] = field(default=None)
    
