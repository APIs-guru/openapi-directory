import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmployersSearchRequest
/** 
 * EmployersSearchRequest defines the request schema for `/employers/search`.
**/
export class EmployersSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products: string[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
