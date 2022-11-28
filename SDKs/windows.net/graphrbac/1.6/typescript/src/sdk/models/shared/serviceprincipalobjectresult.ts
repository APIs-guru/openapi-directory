import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServicePrincipalObjectResult
/** 
 * Service Principal Object Result.
**/
export class ServicePrincipalObjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.metadata" })
  odataMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
