import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationGetRequest
/** 
 * ApplicationGetResponse defines the schema for `/application/get`
**/
export class ApplicationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;
}
