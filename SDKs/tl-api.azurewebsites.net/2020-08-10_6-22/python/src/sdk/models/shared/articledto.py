from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArticleDto:
    r"""ArticleDto
    The ArticleDTO Class.
    Contains relevant fields of Article DTO by masking actual Article entity's fields in application.
                
    """
    
    available_gyms: List[GymDto] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableGyms') }})
    measure_unit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('measureUnit') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    active_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeStatus') }})
    apply_for_all_gyms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyForAllGyms') }})
    article_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleId') }})
    available_qty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableQty') }})
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdUser') }})
    cron_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cronExpression') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    employee_discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employeeDiscount') }})
    employee_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employeePrice') }})
    gym_articles: Optional[List[GymArticleDetailsDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gymArticles') }})
    is_add_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAddOn') }})
    is_inventory_item: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isInventoryItem') }})
    is_obsolete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isObsolete') }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedUser') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    reorder_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reorderLevel') }})
    revenue_account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenueAccountId') }})
    selling_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellingPrice') }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat') }})
    vat_applicable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatApplicable') }})
    
