import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LiabilitiesGetRequestOptions } from "./liabilitiesgetrequestoptions";


// LiabilitiesGetRequest
/** 
 * LiabilitiesGetRequest defines the request schema for `/liabilities/get`
**/
export class LiabilitiesGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=options" })
  options?: LiabilitiesGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
