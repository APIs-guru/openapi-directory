from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Setting:
    asset_number_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetNumberPrefix') }})
    asset_number_sequence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetNumberSequence') }})
    asset_start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStartDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_capital_gain_on_disposal_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCapitalGainOnDisposalAccountId') }})
    default_gain_on_disposal_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultGainOnDisposalAccountId') }})
    default_loss_on_disposal_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLossOnDisposalAccountId') }})
    last_depreciation_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDepreciationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    opt_in_for_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optInForTax') }})
    
