import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Presale } from "./presale";
import { PublicSaleDates } from "./publicsaledates";



// EventSalesDates
/** 
 * Event's Sales Dates
**/
export class EventSalesDates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=presales", elemType: Presale })
  presales?: Presale[];

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: PublicSaleDates;
}
