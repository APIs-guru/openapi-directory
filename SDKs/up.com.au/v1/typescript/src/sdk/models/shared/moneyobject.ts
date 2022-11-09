import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoneyObject
/** 
 * Provides information about a value of money.
 * 
**/
export class MoneyObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @Metadata({ data: "json, name=value" })
  value: string;

  @Metadata({ data: "json, name=valueInBaseUnits" })
  valueInBaseUnits: number;
}
