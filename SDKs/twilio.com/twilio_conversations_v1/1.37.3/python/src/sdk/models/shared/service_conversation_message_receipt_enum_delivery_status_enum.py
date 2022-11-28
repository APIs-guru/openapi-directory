from dataclasses import dataclass, field
from enum import Enum

class ServiceConversationMessageReceiptEnumDeliveryStatusEnum(str, Enum):
    READ = "read"
    FAILED = "failed"
    DELIVERED = "delivered"
    UNDELIVERED = "undelivered"
    SENT = "sent"

