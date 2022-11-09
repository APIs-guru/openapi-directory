import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServicePrincipalObjectResult
/** 
 * Service Principal Object Result.
**/
export class ServicePrincipalObjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.metadata" })
  odataMetadata?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
