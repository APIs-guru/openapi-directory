import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Presale } from "./presale";
import { PublicSaleDates } from "./publicsaledates";


// EventSalesDates
/** 
 * Event's Sales Dates
**/
export class EventSalesDates extends SpeakeasyBase {
  @Metadata({ data: "json, name=presales", elemType: shared.Presale })
  presales?: Presale[];

  @Metadata({ data: "json, name=public" })
  public?: PublicSaleDates;
}
