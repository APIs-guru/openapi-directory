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
class Asset:
    asset_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetName') }})
    accounting_book_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingBookValue') }})
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetId') }})
    asset_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetNumber') }})
    asset_status: Optional[AssetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    asset_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTypeId') }})
    book_depreciation_detail: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookDepreciationDetail') }})
    book_depreciation_setting: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookDepreciationSetting') }})
    can_rollback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRollback') }})
    disposal_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disposalDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disposal_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disposalPrice') }})
    is_delete_enabled_for_date: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDeleteEnabledForDate') }})
    purchase_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    purchase_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchasePrice') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    warranty_expiry_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warrantyExpiryDate') }})
    
