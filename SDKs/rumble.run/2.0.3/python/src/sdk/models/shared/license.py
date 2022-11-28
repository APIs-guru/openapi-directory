from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class License:
    activated_at: Optional[int] = field(default=None)
    address_city: Optional[str] = field(default=None)
    address_country: Optional[str] = field(default=None)
    address_postal: Optional[str] = field(default=None)
    address_region: Optional[str] = field(default=None)
    address_street: Optional[str] = field(default=None)
    created_at: Optional[int] = field(default=None)
    id: Optional[str] = field(default=None)
    license_expiration: Optional[int] = field(default=None)
    license_live_asset_count: Optional[int] = field(default=None)
    license_max_assets: Optional[int] = field(default=None)
    license_project_asset_count: Optional[int] = field(default=None)
    license_type: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    partner: Optional[str] = field(default=None)
    phone: Optional[str] = field(default=None)
    settings: Optional[dict[str, Any]] = field(default=None)
    sso_default_role: Optional[str] = field(default=None)
    sso_domain: Optional[str] = field(default=None)
    sso_login_issuer_url: Optional[str] = field(default=None)
    sso_login_login_url: Optional[str] = field(default=None)
    sso_login_logout_url: Optional[str] = field(default=None)
    sso_login_message: Optional[str] = field(default=None)
    sso_mode: Optional[str] = field(default=None)
    sso_type: Optional[str] = field(default=None)
    subscription_cancel_at: Optional[int] = field(default=None)
    subscription_canceled_at: Optional[int] = field(default=None)
    subscription_period_end: Optional[int] = field(default=None)
    subscription_period_start: Optional[int] = field(default=None)
    updated_at: Optional[int] = field(default=None)
    via_reseller: Optional[bool] = field(default=None)
    
