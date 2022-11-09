import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServicePrincipalListResult
/** 
 * Server response for get tenant service principals API call.
**/
export class ServicePrincipalListResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=odata.nextLink" })
  odataNextLink?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, Map<string, any>>[];
}
