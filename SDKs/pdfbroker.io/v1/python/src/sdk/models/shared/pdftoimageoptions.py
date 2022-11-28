from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PdfToImageOptions:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    horizontal_resolution: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HorizontalResolution') }})
    image_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageFormat') }})
    jpeg_quality: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JpegQuality') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageNumber') }})
    png_compression_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PngCompressionLevel') }})
    transparent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transparent') }})
    vertical_resolution: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerticalResolution') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Width') }})
    
