import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OdataError } from "./odataerror";



// GraphError
/** 
 * Active Directory error information.
**/
export class GraphError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.error" })
  odataError?: OdataError;
}
