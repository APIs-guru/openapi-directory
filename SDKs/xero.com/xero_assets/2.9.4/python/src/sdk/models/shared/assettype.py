from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetType:
    asset_type_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTypeName') }})
    book_depreciation_setting: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookDepreciationSetting') }})
    accumulated_depreciation_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accumulatedDepreciationAccountId') }})
    asset_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTypeId') }})
    depreciation_expense_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depreciationExpenseAccountId') }})
    fixed_asset_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedAssetAccountId') }})
    locks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locks') }})
    
