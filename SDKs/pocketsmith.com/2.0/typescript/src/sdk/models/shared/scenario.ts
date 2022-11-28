import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScenarioTypeEnum {
    NoInterest = "no-interest",
    Savings = "savings",
    Debt = "debt"
}


export class Scenario extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=achieve_date" })
  achieveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=closing_balance" })
  closingBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=closing_balance_date" })
  closingBalanceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=current_balance" })
  currentBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=current_balance_date" })
  currentBalanceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=current_balance_exchange_rate" })
  currentBalanceExchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=current_balance_in_base_currency" })
  currentBalanceInBaseCurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interest_rate" })
  interestRate?: number;

  @SpeakeasyMetadata({ data: "json, name=interest_rate_repeat_id" })
  interestRateRepeatId?: number;

  @SpeakeasyMetadata({ data: "json, name=maximum-value" })
  maximumValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum-value" })
  minimumValue?: number;

  @SpeakeasyMetadata({ data: "json, name=safe_balance" })
  safeBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=safe_balance_in_base_currency" })
  safeBalanceInBaseCurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=starting_balance" })
  startingBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=starting_balance_date" })
  startingBalanceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ScenarioTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
