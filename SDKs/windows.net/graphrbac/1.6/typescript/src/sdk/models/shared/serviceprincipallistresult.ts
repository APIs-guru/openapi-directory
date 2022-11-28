import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServicePrincipalListResult
/** 
 * Server response for get tenant service principals API call.
**/
export class ServicePrincipalListResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
