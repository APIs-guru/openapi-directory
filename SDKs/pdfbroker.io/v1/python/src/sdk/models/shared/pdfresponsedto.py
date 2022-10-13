from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PdfResponseDto:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    pdf_file_base64_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PdfFileBase64String' }})
    
