from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customattributefilter


@dataclass_json
@dataclass
class SearchCatalogItemsRequest:
    category_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_ids' }})
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    custom_attribute_filters: Optional[List[customattributefilter.CustomAttributeFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_attribute_filters' }})
    enabled_location_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled_location_ids' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    product_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_types' }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_order' }})
    stock_levels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stock_levels' }})
    text_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_filter' }})
    
