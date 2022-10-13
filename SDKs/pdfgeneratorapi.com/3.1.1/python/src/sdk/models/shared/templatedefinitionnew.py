from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import component

class TemplateDefinitionNewLayoutFormatEnum(str, Enum):
    A4 = "A4"
    LETTER = "letter"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class TemplateDefinitionNewLayoutMargins:
    bottom: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottom' }})
    left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    right: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'right' }})
    top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    
class TemplateDefinitionNewLayoutOrientationEnum(str, Enum):
    PORTRAIT = "portrait"
    LANDSCAPE = "landscape"

class TemplateDefinitionNewLayoutRepeatLayoutFormatEnum(str, Enum):
    A4 = "A4"
    LETTER = "letter"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class TemplateDefinitionNewLayoutRepeatLayout:
    format: Optional[TemplateDefinitionNewLayoutRepeatLayoutFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
class TemplateDefinitionNewLayoutUnitEnum(str, Enum):
    CM = "cm"
    IN = "in"


@dataclass_json
@dataclass
class TemplateDefinitionNewLayout:
    empty_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emptyLabels' }})
    format: Optional[TemplateDefinitionNewLayoutFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    margins: Optional[TemplateDefinitionNewLayoutMargins] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'margins' }})
    orientation: Optional[TemplateDefinitionNewLayoutOrientationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    repeat_layout: Optional[TemplateDefinitionNewLayoutRepeatLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatLayout' }})
    rotaion: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotaion' }})
    unit: Optional[TemplateDefinitionNewLayoutUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class TemplateDefinitionNewPagesMargins:
    bottom: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottom' }})
    right: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'right' }})
    

@dataclass_json
@dataclass
class TemplateDefinitionNewPages:
    components: Optional[List[component.Component]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    margins: Optional[TemplateDefinitionNewPagesMargins] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'margins' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class TemplateDefinitionNew:
    is_draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDraft' }})
    layout: Optional[TemplateDefinitionNewLayout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pages: Optional[List[TemplateDefinitionNewPages]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
