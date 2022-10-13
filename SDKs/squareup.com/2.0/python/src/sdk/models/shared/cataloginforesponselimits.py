from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CatalogInfoResponseLimits:
    batch_delete_max_object_ids: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batch_delete_max_object_ids' }})
    batch_retrieve_max_object_ids: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batch_retrieve_max_object_ids' }})
    batch_upsert_max_objects_per_batch: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batch_upsert_max_objects_per_batch' }})
    batch_upsert_max_total_objects: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batch_upsert_max_total_objects' }})
    search_max_page_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search_max_page_limit' }})
    update_item_modifier_lists_max_item_ids: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_item_modifier_lists_max_item_ids' }})
    update_item_modifier_lists_max_modifier_lists_to_disable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_item_modifier_lists_max_modifier_lists_to_disable' }})
    update_item_modifier_lists_max_modifier_lists_to_enable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_item_modifier_lists_max_modifier_lists_to_enable' }})
    update_item_taxes_max_item_ids: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_item_taxes_max_item_ids' }})
    update_item_taxes_max_taxes_to_disable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_item_taxes_max_taxes_to_disable' }})
    update_item_taxes_max_taxes_to_enable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_item_taxes_max_taxes_to_enable' }})
    
