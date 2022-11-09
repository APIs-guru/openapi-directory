import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=always_show_base_currency" })
  alwaysShowBaseCurrency?: boolean;

  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=base_currency_code" })
  baseCurrencyCode?: string;

  @Metadata({ data: "json, name=beta_user" })
  betaUser?: boolean;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_activity_at" })
  lastActivityAt?: string;

  @Metadata({ data: "json, name=last_logged_in_at" })
  lastLoggedInAt?: string;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=using_multiple_currencies" })
  usingMultipleCurrencies?: boolean;

  @Metadata({ data: "json, name=week_start_day" })
  weekStartDay?: number;
}
