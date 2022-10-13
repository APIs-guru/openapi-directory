from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class SvgconvertRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class SvgconvertRequestBodyFileToConvert:
    file: Optional[SvgconvertRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class SvgconvertRequest:
    request: SvgconvertRequestBodyFileToConvert = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class Svgconvert200ApplicationJSONFileURL:
    blob_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blob_name' }})
    blob_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blob_url' }})
    

@dataclass
class SvgconvertResponse:
    content_type: str = field(default=None)
    file_url: Optional[Svgconvert200ApplicationJSONFileURL] = field(default=None)
    status_code: int = field(default=None)
    
