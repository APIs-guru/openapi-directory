import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameFound } from "./namefound";


// CompanySummary
/** 
 * Represents the summary of a company background check
**/
export class CompanySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=names_found", elemType: shared.NameFound })
  namesFound?: NameFound[];
}
