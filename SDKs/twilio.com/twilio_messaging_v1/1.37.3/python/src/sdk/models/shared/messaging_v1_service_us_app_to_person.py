from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MessagingV1ServiceUsAppToPerson:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    brand_registration_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand_registration_sid') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaign_id') }})
    campaign_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaign_status') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    has_embedded_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_embedded_links') }})
    has_embedded_phone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_embedded_phone') }})
    help_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('help_keywords') }})
    help_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('help_message') }})
    is_externally_registered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_externally_registered') }})
    message_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_flow') }})
    message_samples: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message_samples') }})
    messaging_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messaging_service_sid') }})
    mock: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mock') }})
    opt_in_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_in_keywords') }})
    opt_in_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_in_message') }})
    opt_out_keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_out_keywords') }})
    opt_out_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_out_message') }})
    rate_limits: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_limits') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    us_app_to_person_usecase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('us_app_to_person_usecase') }})
    
