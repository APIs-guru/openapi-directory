from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteInstallationSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteInstallationRequest:
    security: DeleteInstallationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteInstallation200ApplicationJSONUsageCharge:
    api_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_token' }})
    closing_on: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closing_on' }})
    

@dataclass_json
@dataclass
class DeleteInstallation200ApplicationJSON:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    application_charge_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_charge_source_id' }})
    recurring_application_charge_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurring_application_charge_id' }})
    uninstalled_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uninstalled_at' }})
    usage_charge: Optional[DeleteInstallation200ApplicationJSONUsageCharge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_charge' }})
    

@dataclass
class DeleteInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_installation_200_application_json_object: Optional[DeleteInstallation200ApplicationJSON] = field(default=None)
    
