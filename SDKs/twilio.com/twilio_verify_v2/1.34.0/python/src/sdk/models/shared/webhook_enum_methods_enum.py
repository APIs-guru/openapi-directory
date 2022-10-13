from dataclasses import dataclass, field
from typing import Enum

class WebhookEnumMethodsEnum(str, Enum):
    GET = "GET"
    POST = "POST"

