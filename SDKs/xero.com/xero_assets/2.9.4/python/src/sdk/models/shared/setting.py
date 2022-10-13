from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Setting:
    asset_number_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetNumberPrefix' }})
    asset_number_sequence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetNumberSequence' }})
    asset_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_capital_gain_on_disposal_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCapitalGainOnDisposalAccountId' }})
    default_gain_on_disposal_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultGainOnDisposalAccountId' }})
    default_loss_on_disposal_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLossOnDisposalAccountId' }})
    last_depreciation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDepreciationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    opt_in_for_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optInForTax' }})
    
