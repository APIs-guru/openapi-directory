import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationGetRequest
/** 
 * ApplicationGetResponse defines the schema for `/application/get`
**/
export class ApplicationGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=application_id" })
  applicationId: string;

  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=secret" })
  secret: string;
}
