from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ActionResponse:
    r"""ActionResponse
    The object encapsulating the output of an operation affecting the PATROL Agent.
    """
    
    psl_output: Optional[str] = field(default=None)
    
