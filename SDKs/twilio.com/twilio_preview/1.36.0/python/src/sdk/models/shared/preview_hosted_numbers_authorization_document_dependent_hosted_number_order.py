from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dependent_hosted_number_order_enum_status_enum
from . import dependent_hosted_number_order_enum_verification_type_enum


@dataclass_json
@dataclass
class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities:
    fax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    mms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mms' }})
    sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms' }})
    voice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    

@dataclass_json
@dataclass
class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    address_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_sid' }})
    call_delay: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_delay' }})
    capabilities: Optional[PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    cc_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cc_emails' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure_reason' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    incoming_phone_number_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incoming_phone_number_sid' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    signing_document_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signing_document_sid' }})
    status: Optional[dependent_hosted_number_order_enum_status_enum.DependentHostedNumberOrderEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    verification_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_attempts' }})
    verification_call_sids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_call_sids' }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_code' }})
    verification_document_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_document_sid' }})
    verification_type: Optional[dependent_hosted_number_order_enum_verification_type_enum.DependentHostedNumberOrderEnumVerificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_type' }})
    
