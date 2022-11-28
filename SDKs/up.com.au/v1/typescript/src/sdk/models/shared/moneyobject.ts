import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoneyObject
/** 
 * Provides information about a value of money.
 * 
**/
export class MoneyObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}
