from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class AnnotationLayerAnnotationTypeEnum(str, Enum):
    FORMULA = "FORMULA"
    INTERVAL = "INTERVAL"
    EVENT = "EVENT"
    TIME_SERIES = "TIME_SERIES"

class AnnotationLayerOpacityEnum(str, Enum):
    UNKNOWN = ""
    OPACITY_LOW = "opacityLow"
    OPACITY_MEDIUM = "opacityMedium"
    OPACITY_HIGH = "opacityHigh"

class AnnotationLayerSourceTypeEnum(str, Enum):
    UNKNOWN = ""
    LINE = "line"
    NATIVE = "NATIVE"
    TABLE = "table"

class AnnotationLayerStyleEnum(str, Enum):
    DASHED = "dashed"
    DOTTED = "dotted"
    SOLID = "solid"
    LONG_DASHED = "longDashed"


@dataclass_json
@dataclass
class AnnotationLayer:
    annotation_type: Optional[AnnotationLayerAnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationType' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    description_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptionColumns' }})
    hide_line: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideLine' }})
    interval_end_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalEndColumn' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    opacity: Optional[AnnotationLayerOpacityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opacity' }})
    overrides: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrides' }})
    show: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show' }})
    show_markers: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showMarkers' }})
    source_type: Optional[AnnotationLayerSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceType' }})
    style: Optional[AnnotationLayerStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    time_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeColumn' }})
    title_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleColumn' }})
    value: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
