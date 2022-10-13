from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import component


@dataclass_json
@dataclass
class TemplateDefinitionDataSettings:
    filter_by: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterBy' }})
    sort_by: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortBy' }})
    

@dataclass_json
@dataclass
class TemplateDefinitionEditor:
    height_multiplier: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightMultiplier' }})
    
class TemplateDefinitionLayoutFormatEnum(str, Enum):
    A4 = "A4"
    LETTER = "letter"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class TemplateDefinitionLayoutMargins:
    bottom: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottom' }})
    left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    right: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'right' }})
    top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    
class TemplateDefinitionLayoutOrientationEnum(str, Enum):
    PORTRAIT = "portrait"
    LANDSCAPE = "landscape"

class TemplateDefinitionLayoutRepeatLayoutFormatEnum(str, Enum):
    A4 = "A4"
    LETTER = "letter"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class TemplateDefinitionLayoutRepeatLayout:
    format: Optional[TemplateDefinitionLayoutRepeatLayoutFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
class TemplateDefinitionLayoutUnitEnum(str, Enum):
    CM = "cm"
    IN = "in"


@dataclass_json
@dataclass
class TemplateDefinitionLayout:
    empty_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emptyLabels' }})
    format: Optional[TemplateDefinitionLayoutFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    margins: Optional[TemplateDefinitionLayoutMargins] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'margins' }})
    orientation: Optional[TemplateDefinitionLayoutOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    repeat_layout: Optional[TemplateDefinitionLayoutRepeatLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatLayout' }})
    rotation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotation' }})
    unit: Optional[TemplateDefinitionLayoutUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class TemplateDefinitionPagesMargins:
    bottom: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottom' }})
    right: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'right' }})
    

@dataclass_json
@dataclass
class TemplateDefinitionPages:
    components: Optional[List[component.Component]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    margins: Optional[TemplateDefinitionPagesMargins] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'margins' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class TemplateDefinition:
    data_settings: Optional[TemplateDefinitionDataSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSettings' }})
    editor: Optional[TemplateDefinitionEditor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editor' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDraft' }})
    layout: Optional[TemplateDefinitionLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pages: Optional[List[TemplateDefinitionPages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
