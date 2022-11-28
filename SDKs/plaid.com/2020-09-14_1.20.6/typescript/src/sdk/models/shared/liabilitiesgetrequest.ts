import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiabilitiesGetRequestOptions } from "./liabilitiesgetrequestoptions";



// LiabilitiesGetRequest
/** 
 * LiabilitiesGetRequest defines the request schema for `/liabilities/get`
**/
export class LiabilitiesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: LiabilitiesGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
