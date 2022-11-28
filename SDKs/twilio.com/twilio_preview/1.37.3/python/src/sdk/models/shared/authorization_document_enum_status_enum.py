from dataclasses import dataclass, field
from enum import Enum

class AuthorizationDocumentEnumStatusEnum(str, Enum):
    OPENED = "opened"
    SIGNING = "signing"
    SIGNED = "signed"
    CANCELED = "canceled"
    FAILED = "failed"

