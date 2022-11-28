from dataclasses import dataclass, field
from enum import Enum

class WebhookEnumMethodsEnum(str, Enum):
    GET = "GET"
    POST = "POST"

