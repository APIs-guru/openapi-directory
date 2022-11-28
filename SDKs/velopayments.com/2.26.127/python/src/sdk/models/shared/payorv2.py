from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PayorV2LanguageEnum(str, Enum):
    EN = "EN"
    FR = "FR"


@dataclass_json
@dataclass
class PayorV2:
    payor_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    payor_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    address: Optional[PayorAddressV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    allows_language_choice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsLanguageChoice') }})
    collective_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectiveAlias') }})
    dba_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbaName') }})
    includes_reports: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includesReports') }})
    kyc_state: Optional[KycStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kycState') }})
    language: Optional[PayorV2LanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    manual_lockout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualLockout') }})
    max_master_payor_admins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxMasterPayorAdmins') }})
    payee_grace_period_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeGracePeriodDays') }})
    payee_grace_period_processing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeGracePeriodProcessingEnabled') }})
    payment_rails: Optional[PaymentRailsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentRails') }})
    payor_xid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorXid') }})
    primary_contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactEmail') }})
    primary_contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactName') }})
    primary_contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactPhone') }})
    reminder_emails_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminderEmailsOptOut') }})
    remote_system_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemIds') }})
    support_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportContact') }})
    transmission_types: Optional[TransmissionTypes2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmissionTypes') }})
    wu_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wuCustomerId') }})
    
