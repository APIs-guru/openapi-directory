import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApiEndpoints
/** 
 * objects with two fields, the first one has the endpoint name as key and its description as value, the second one has HTTP verb to use (GET, POST PUT, DELETE) as key and the supported version an API path for value.
**/
export class ApiEndpoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointName" })
  endpointName?: string;

  @Metadata({ data: "json, name=httpVerb" })
  httpVerb?: any;
}
