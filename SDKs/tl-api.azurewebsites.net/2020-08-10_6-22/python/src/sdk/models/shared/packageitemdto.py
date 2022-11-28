from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PackageItemDto:
    r"""PackageItemDto
    The PackageItemDTO Class.
    Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.
                
    """
    
    article_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleId') }})
    article_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleName') }})
    article_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleNumber') }})
    article_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articlePrice') }})
    end_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endOrder') }})
    is_include_service_in_charge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isIncludeServiceInCharge') }})
    measure_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measureUnit') }})
    number_of_items: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfItems') }})
    start_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startOrder') }})
    
