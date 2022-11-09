import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OdataError } from "./odataerror";


// GraphError
/** 
 * Active Directory error information.
**/
export class GraphError extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.error" })
  odataError?: OdataError;
}
