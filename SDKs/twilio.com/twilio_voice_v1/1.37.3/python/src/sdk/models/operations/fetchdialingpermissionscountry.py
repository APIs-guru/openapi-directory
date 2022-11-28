from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_DIALING_PERMISSIONS_COUNTRY_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchDialingPermissionsCountryPathParams:
    iso_code: str = field(metadata={'path_param': { 'field_name': 'IsoCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDialingPermissionsCountrySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDialingPermissionsCountryRequest:
    path_params: FetchDialingPermissionsCountryPathParams = field()
    security: FetchDialingPermissionsCountrySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDialingPermissionsCountryResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_dialing_permissions_dialing_permissions_country_instance: Optional[shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance] = field(default=None)
    
