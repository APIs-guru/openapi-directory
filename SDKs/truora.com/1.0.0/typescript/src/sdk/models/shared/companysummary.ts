import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameFound } from "./namefound";



// CompanySummary
/** 
 * Represents the summary of a company background check
**/
export class CompanySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names_found", elemType: NameFound })
  namesFound?: NameFound[];
}
