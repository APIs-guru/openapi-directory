from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SvgconvertFileToConvertFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class SvgconvertFileToConvert:
    file: Optional[SvgconvertFileToConvertFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass_json
@dataclass
class SvgconvertFileURL:
    blob_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_name') }})
    blob_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_url') }})
    

@dataclass
class SvgconvertRequest:
    request: SvgconvertFileToConvert = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SvgconvertResponse:
    content_type: str = field()
    status_code: int = field()
    file_url: Optional[SvgconvertFileURL] = field(default=None)
    
