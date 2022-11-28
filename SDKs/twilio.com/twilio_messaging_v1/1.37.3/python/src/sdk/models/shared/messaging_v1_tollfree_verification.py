from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessagingV1TollfreeVerification:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_information') }})
    business_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_city') }})
    business_contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_contact_email') }})
    business_contact_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_contact_first_name') }})
    business_contact_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_contact_last_name') }})
    business_contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_contact_phone') }})
    business_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_country') }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_name') }})
    business_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_postal_code') }})
    business_state_province_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_state_province_region') }})
    business_street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_street_address') }})
    business_street_address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_street_address2') }})
    business_website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('business_website') }})
    customer_profile_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_profile_sid') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message_volume: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_volume') }})
    notification_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification_email') }})
    opt_in_image_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_in_image_urls') }})
    opt_in_type: Optional[TollfreeVerificationEnumOptInTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_in_type') }})
    production_message_sample: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('production_message_sample') }})
    regulated_item_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regulated_item_sid') }})
    resource_links: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_links') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    status: Optional[TollfreeVerificationEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tollfree_phone_number_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tollfree_phone_number_sid') }})
    trust_product_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trust_product_sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    use_case_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_case_categories') }})
    use_case_summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('use_case_summary') }})
    
