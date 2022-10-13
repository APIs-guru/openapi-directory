from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import payoraddress
from . import kycstate_enum
from . import transmissiontypes

class PayorV1LanguageEnum(str, Enum):
    EN = "EN"
    FR = "FR"


@dataclass_json
@dataclass
class PayorV1:
    address: Optional[payoraddress.PayorAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    allows_language_choice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsLanguageChoice' }})
    collective_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectiveAlias' }})
    dba_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbaName' }})
    funding_account_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingAccountAccountName' }})
    funding_account_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingAccountAccountNumber' }})
    funding_account_routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingAccountRoutingNumber' }})
    includes_reports: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includesReports' }})
    kyc_state: Optional[kycstate_enum.KycStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kycState' }})
    language: Optional[PayorV1LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    manual_lockout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualLockout' }})
    max_master_payor_admins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxMasterPayorAdmins' }})
    payee_grace_period_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeGracePeriodDays' }})
    payee_grace_period_processing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeGracePeriodProcessingEnabled' }})
    payor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    payor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorName' }})
    primary_contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactEmail' }})
    primary_contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactName' }})
    primary_contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactPhone' }})
    reminder_emails_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reminderEmailsOptOut' }})
    support_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportContact' }})
    transmission_types: Optional[transmissiontypes.TransmissionTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmissionTypes' }})
    
