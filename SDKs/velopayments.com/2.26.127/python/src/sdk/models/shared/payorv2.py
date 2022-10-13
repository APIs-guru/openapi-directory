from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import payoraddressv2
from . import kycstate_enum
from . import paymentrails_enum
from . import transmissiontypes_2

class PayorV2LanguageEnum(str, Enum):
    EN = "EN"
    FR = "FR"


@dataclass_json
@dataclass
class PayorV2:
    address: Optional[payoraddressv2.PayorAddressV2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    allows_language_choice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsLanguageChoice' }})
    collective_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectiveAlias' }})
    dba_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbaName' }})
    includes_reports: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includesReports' }})
    kyc_state: Optional[kycstate_enum.KycStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kycState' }})
    language: Optional[PayorV2LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    manual_lockout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualLockout' }})
    max_master_payor_admins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxMasterPayorAdmins' }})
    payee_grace_period_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeGracePeriodDays' }})
    payee_grace_period_processing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeGracePeriodProcessingEnabled' }})
    payment_rails: Optional[paymentrails_enum.PaymentRailsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentRails' }})
    payor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorId' }})
    payor_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorName' }})
    payor_xid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payorXid' }})
    primary_contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactEmail' }})
    primary_contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactName' }})
    primary_contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContactPhone' }})
    reminder_emails_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reminderEmailsOptOut' }})
    remote_system_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteSystemIds' }})
    support_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportContact' }})
    transmission_types: Optional[transmissiontypes_2.TransmissionTypes2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmissionTypes' }})
    wu_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wuCustomerId' }})
    
