from dataclasses import dataclass, field



@dataclass
class Error:
    message: str = field()
    status: int = field()
    
