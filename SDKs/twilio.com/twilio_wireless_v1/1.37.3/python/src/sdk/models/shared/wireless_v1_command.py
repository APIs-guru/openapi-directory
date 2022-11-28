from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WirelessV1Command:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    command_mode: Optional[CommandEnumCommandModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command_mode') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_receipt_requested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_receipt_requested') }})
    direction: Optional[CommandEnumDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    sim_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sim_sid') }})
    status: Optional[CommandEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transport: Optional[CommandEnumTransportEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
