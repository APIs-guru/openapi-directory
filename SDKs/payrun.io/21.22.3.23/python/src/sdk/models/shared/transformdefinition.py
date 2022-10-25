from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransformDefinitionTransformDefinition:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Active' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    definition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Definition' }})
    definition_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefinitionType' }})
    readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Readonly' }})
    supported_reports: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedReports' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    

@dataclass_json
@dataclass
class TransformDefinition:
    transform_definition: Optional[TransformDefinitionTransformDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformDefinition' }})
    
