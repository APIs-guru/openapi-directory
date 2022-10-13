from dataclasses import dataclass, field
from typing import Enum

class AuthorizationDocumentEnumStatusEnum(str, Enum):
    OPENED = "opened"
    SIGNING = "signing"
    SIGNED = "signed"
    CANCELED = "canceled"
    FAILED = "failed"

