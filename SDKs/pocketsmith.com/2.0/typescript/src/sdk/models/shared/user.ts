import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=always_show_base_currency" })
  alwaysShowBaseCurrency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=base_currency_code" })
  baseCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=beta_user" })
  betaUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_activity_at" })
  lastActivityAt?: string;

  @SpeakeasyMetadata({ data: "json, name=last_logged_in_at" })
  lastLoggedInAt?: string;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=using_multiple_currencies" })
  usingMultipleCurrencies?: boolean;

  @SpeakeasyMetadata({ data: "json, name=week_start_day" })
  weekStartDay?: number;
}
