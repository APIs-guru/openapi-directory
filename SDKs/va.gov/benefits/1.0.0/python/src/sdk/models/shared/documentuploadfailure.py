from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DocumentUploadFailure:
    r"""DocumentUploadFailure
    Document upload failed
    """
    
    code: Optional[str] = field(default=None)
    message: Optional[str] = field(default=None)
    
