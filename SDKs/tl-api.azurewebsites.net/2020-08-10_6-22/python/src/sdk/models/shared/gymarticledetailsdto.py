from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GymArticleDetailsDto:
    article_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleId' }})
    available_qty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableQty' }})
    created_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdUser' }})
    employee_discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeeDiscount' }})
    employee_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeePrice' }})
    gym_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gymId' }})
    gym_id_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gymIdList' }})
    gym_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gymName' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    is_inventory_item: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInventoryItem' }})
    is_obsolete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isObsolete' }})
    modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedUser' }})
    reorder_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reorderLevel' }})
    revenue_account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenueAccountId' }})
    selling_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellingPrice' }})
    
