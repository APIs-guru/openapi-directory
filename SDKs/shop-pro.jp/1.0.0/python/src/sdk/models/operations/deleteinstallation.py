from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteInstallationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class DeleteInstallation200ApplicationJSONUsageCharge:
    r"""DeleteInstallation200ApplicationJSONUsageCharge
    （従量課金の場合）従量課金アンインストール情報
    """
    
    api_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_token') }})
    closing_on: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closing_on') }})
    

@dataclass_json
@dataclass
class DeleteInstallation200ApplicationJSON:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    application_charge_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_charge_source_id') }})
    recurring_application_charge_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurring_application_charge_id') }})
    uninstalled_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uninstalled_at') }})
    usage_charge: Optional[DeleteInstallation200ApplicationJSONUsageCharge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_charge') }})
    

@dataclass
class DeleteInstallationRequest:
    security: DeleteInstallationSecurity = field()
    

@dataclass
class DeleteInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    delete_installation_200_application_json_object: Optional[DeleteInstallation200ApplicationJSON] = field(default=None)
    
