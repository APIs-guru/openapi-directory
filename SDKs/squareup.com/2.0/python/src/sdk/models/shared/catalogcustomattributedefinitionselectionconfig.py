from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import catalogcustomattributedefinitionselectionconfigcustomattributeselection


@dataclass_json
@dataclass
class CatalogCustomAttributeDefinitionSelectionConfig:
    allowed_selections: Optional[List[catalogcustomattributedefinitionselectionconfigcustomattributeselection.CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_selections' }})
    max_allowed_selections: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_allowed_selections' }})
    
