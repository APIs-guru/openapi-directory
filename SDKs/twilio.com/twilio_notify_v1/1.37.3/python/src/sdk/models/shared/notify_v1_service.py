from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotifyV1Service:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    alexa_skill_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alexa_skill_id') }})
    apn_credential_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apn_credential_sid') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_alexa_notification_protocol_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_alexa_notification_protocol_version') }})
    default_apn_notification_protocol_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_apn_notification_protocol_version') }})
    default_fcm_notification_protocol_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_fcm_notification_protocol_version') }})
    default_gcm_notification_protocol_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_gcm_notification_protocol_version') }})
    delivery_callback_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_callback_enabled') }})
    delivery_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_callback_url') }})
    facebook_messenger_page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('facebook_messenger_page_id') }})
    fcm_credential_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcm_credential_sid') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    gcm_credential_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcm_credential_sid') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    log_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log_enabled') }})
    messaging_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messaging_service_sid') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
