from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gymdto
from . import gymarticledetailsdto


@dataclass_json
@dataclass
class ArticleDto:
    active_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeStatus' }})
    apply_for_all_gyms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyForAllGyms' }})
    article_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleId' }})
    available_gyms: List[gymdto.GymDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableGyms' }})
    available_qty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableQty' }})
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcode' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdUser' }})
    cron_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cronExpression' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount' }})
    employee_discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeeDiscount' }})
    employee_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employeePrice' }})
    gym_articles: Optional[List[gymarticledetailsdto.GymArticleDetailsDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gymArticles' }})
    is_add_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAddOn' }})
    is_inventory_item: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInventoryItem' }})
    is_obsolete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isObsolete' }})
    measure_unit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measureUnit' }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedUser' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    reorder_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reorderLevel' }})
    revenue_account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenueAccountId' }})
    selling_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellingPrice' }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vat' }})
    vat_applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatApplicable' }})
    
