from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class APIV2010AccountUsageUsageRecordUsageRecordYesterday:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    as_of: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('as_of') }})
    category: Optional[UsageRecordYesterdayEnumCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    count_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_unit') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_unit') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subresource_uris') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    usage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    usage_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_unit') }})
    
