from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogitemoptionforitem
from . import catalogitemmodifierlistinfo
from . import catalogobject


@dataclass_json
@dataclass
class CatalogItem:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    available_electronically: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_electronically' }})
    available_for_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_for_pickup' }})
    available_online: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_online' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_id' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    item_options: Optional[List[catalogitemoptionforitem.CatalogItemOptionForItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_options' }})
    label_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label_color' }})
    modifier_list_info: Optional[List[catalogitemmodifierlistinfo.CatalogItemModifierListInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifier_list_info' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_type' }})
    skip_modifier_screen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_modifier_screen' }})
    sort_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_name' }})
    tax_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_ids' }})
    variations: Optional[List[catalogobject.CatalogObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variations' }})
    
