import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScenarioTypeEnum {
    NoInterest = "no-interest"
,    Savings = "savings"
,    Debt = "debt"
}


export class Scenario extends SpeakeasyBase {
  @Metadata({ data: "json, name=achieve_date" })
  achieveDate?: string;

  @Metadata({ data: "json, name=closing_balance" })
  closingBalance?: number;

  @Metadata({ data: "json, name=closing_balance_date" })
  closingBalanceDate?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=current_balance" })
  currentBalance?: number;

  @Metadata({ data: "json, name=current_balance_date" })
  currentBalanceDate?: string;

  @Metadata({ data: "json, name=current_balance_exchange_rate" })
  currentBalanceExchangeRate?: number;

  @Metadata({ data: "json, name=current_balance_in_base_currency" })
  currentBalanceInBaseCurrency?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interest_rate" })
  interestRate?: number;

  @Metadata({ data: "json, name=interest_rate_repeat_id" })
  interestRateRepeatId?: number;

  @Metadata({ data: "json, name=maximum-value" })
  maximumValue?: number;

  @Metadata({ data: "json, name=minimum-value" })
  minimumValue?: number;

  @Metadata({ data: "json, name=safe_balance" })
  safeBalance?: number;

  @Metadata({ data: "json, name=safe_balance_in_base_currency" })
  safeBalanceInBaseCurrency?: number;

  @Metadata({ data: "json, name=starting_balance" })
  startingBalance?: number;

  @Metadata({ data: "json, name=starting_balance_date" })
  startingBalanceDate?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: ScenarioTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
