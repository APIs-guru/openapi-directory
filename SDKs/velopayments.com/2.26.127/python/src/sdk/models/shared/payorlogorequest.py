from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PayorLogoRequestLogo:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    logo: str = field(default=None, metadata={'multipart_form': { 'field_name': 'logo' }})
    

@dataclass
class PayorLogoRequest:
    logo: Optional[PayorLogoRequestLogo] = field(default=None, metadata={'multipart_form': { 'file': True }})
    
