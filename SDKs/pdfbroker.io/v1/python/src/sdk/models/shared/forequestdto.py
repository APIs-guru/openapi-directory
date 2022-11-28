from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FoRequestDto:
    r"""FoRequestDto
    The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string.
    """
    
    fo_document_base64_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FoDocumentBase64String') }})
    metadata: Optional[PdfMetadataDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metadata') }})
    resources: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    
