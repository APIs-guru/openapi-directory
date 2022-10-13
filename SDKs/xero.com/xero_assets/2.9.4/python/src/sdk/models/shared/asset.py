from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import assetstatus_enum


@dataclass_json
@dataclass
class Asset:
    accounting_book_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountingBookValue' }})
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetId' }})
    asset_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetName' }})
    asset_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetNumber' }})
    asset_status: Optional[assetstatus_enum.AssetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetStatus' }})
    asset_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTypeId' }})
    book_depreciation_detail: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookDepreciationDetail' }})
    book_depreciation_setting: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookDepreciationSetting' }})
    can_rollback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRollback' }})
    disposal_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disposalDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disposal_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disposalPrice' }})
    is_delete_enabled_for_date: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeleteEnabledForDate' }})
    purchase_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    purchase_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchasePrice' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    warranty_expiry_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warrantyExpiryDate' }})
    
