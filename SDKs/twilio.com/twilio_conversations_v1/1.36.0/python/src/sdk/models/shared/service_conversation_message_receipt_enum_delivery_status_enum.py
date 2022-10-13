from dataclasses import dataclass, field
from typing import Enum

class ServiceConversationMessageReceiptEnumDeliveryStatusEnum(str, Enum):
    READ = "read"
    FAILED = "failed"
    DELIVERED = "delivered"
    UNDELIVERED = "undelivered"
    SENT = "sent"

