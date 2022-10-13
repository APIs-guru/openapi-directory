from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ComponentClsEnum(str, Enum):
    LABEL_COMPONENT = "labelComponent"
    NUMBER_COMPONENT = "numberComponent"
    TEXT_COMPONENT = "textComponent"
    IMAGE_COMPONENT = "imageComponent"
    DATE_COMPONENT = "dateComponent"
    HLINE_COMPONENT = "hlineComponent"
    VLINE_COMPONENT = "vlineComponent"
    TABLE_COMPONENT = "tableComponent"
    COMPOSITE_COMPONENT = "compositeComponent"
    BARCODE_COMPONENT = "barcodeComponent"
    QRCODE_COMPONENT = "qrcodeComponent"
    CHART_COMPONENT = "chartComponent"
    RECTANGLE_COMPONENT = "rectangleComponent"
    HEADER_COMPONENT = "headerComponent"
    FOOTER_COMPONENT = "footerComponent"
    CHECKBOX_COMPONENT = "checkboxComponent"
    RADIO_COMPONENT = "radioComponent"


@dataclass_json
@dataclass
class Component:
    cls: Optional[ComponentClsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cls' }})
    data_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataIndex' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    zindex: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zindex' }})
    
