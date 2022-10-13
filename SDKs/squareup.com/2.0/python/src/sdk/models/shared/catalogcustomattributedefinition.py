from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogcustomattributedefinitionnumberconfig
from . import catalogcustomattributedefinitionselectionconfig
from . import sourceapplication
from . import catalogcustomattributedefinitionstringconfig


@dataclass_json
@dataclass
class CatalogCustomAttributeDefinition:
    allowed_object_types: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_object_types' }})
    app_visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_visibility' }})
    custom_attribute_usage_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_attribute_usage_count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number_config: Optional[catalogcustomattributedefinitionnumberconfig.CatalogCustomAttributeDefinitionNumberConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_config' }})
    selection_config: Optional[catalogcustomattributedefinitionselectionconfig.CatalogCustomAttributeDefinitionSelectionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selection_config' }})
    seller_visibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_visibility' }})
    source_application: Optional[sourceapplication.SourceApplication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_application' }})
    string_config: Optional[catalogcustomattributedefinitionstringconfig.CatalogCustomAttributeDefinitionStringConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'string_config' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
