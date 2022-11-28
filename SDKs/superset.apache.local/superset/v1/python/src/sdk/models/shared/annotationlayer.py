from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    show: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('show') }})
    show_markers: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('showMarkers') }})
    value: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    annotation_type: Optional[AnnotationLayerAnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationType') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    description_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptionColumns') }})
    hide_line: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideLine') }})
    interval_end_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalEndColumn') }})
    opacity: Optional[AnnotationLayerOpacityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opacity') }})
    overrides: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    source_type: Optional[AnnotationLayerSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    style: Optional[AnnotationLayerStyleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    time_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeColumn') }})
    title_column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleColumn') }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
