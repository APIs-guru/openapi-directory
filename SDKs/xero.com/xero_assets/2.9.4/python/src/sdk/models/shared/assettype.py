from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetType:
    accumulated_depreciation_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accumulatedDepreciationAccountId' }})
    asset_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTypeId' }})
    asset_type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTypeName' }})
    book_depreciation_setting: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookDepreciationSetting' }})
    depreciation_expense_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depreciationExpenseAccountId' }})
    fixed_asset_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedAssetAccountId' }})
    locks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locks' }})
    
