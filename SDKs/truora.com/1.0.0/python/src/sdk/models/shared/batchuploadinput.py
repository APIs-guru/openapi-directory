from dataclasses import dataclass, field
from typing import List


@dataclass
class BatchUploadInputFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class BatchUploadInput:
    r"""BatchUploadInput
    Represents the parameters required to perform a batch upload
    """
    
    file: List[BatchUploadInputFile] = field(metadata={'multipart_form': { 'field_name': 'file' }})
    
