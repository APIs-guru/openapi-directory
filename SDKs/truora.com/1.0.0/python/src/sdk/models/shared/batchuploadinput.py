from dataclasses import dataclass, field
from typing import List


@dataclass
class BatchUploadInputFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class BatchUploadInput:
    file: List[BatchUploadInputFile] = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    
