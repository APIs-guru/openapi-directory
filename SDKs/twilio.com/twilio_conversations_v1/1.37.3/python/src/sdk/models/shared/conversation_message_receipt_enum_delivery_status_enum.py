from dataclasses import dataclass, field
from enum import Enum

class ConversationMessageReceiptEnumDeliveryStatusEnum(str, Enum):
    READ = "read"
    FAILED = "failed"
    DELIVERED = "delivered"
    UNDELIVERED = "undelivered"
    SENT = "sent"

