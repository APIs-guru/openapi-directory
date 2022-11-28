import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiEndpoints
/** 
 * objects with two fields, the first one has the endpoint name as key and its description as value, the second one has HTTP verb to use (GET, POST PUT, DELETE) as key and the supported version an API path for value.
**/
export class ApiEndpoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointName" })
  endpointName?: string;

  @SpeakeasyMetadata({ data: "json, name=httpVerb" })
  httpVerb?: any;
}
