from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PdfResponseDto:
    r"""PdfResponseDto
    When setting the Accept-header in the request to \"application/json\" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header \"application/pdf\".
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    pdf_file_base64_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PdfFileBase64String') }})
    
