import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmployersSearchRequest
/** 
 * EmployersSearchRequest defines the request schema for `/employers/search`.
**/
export class EmployersSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=products" })
  products: string[];

  @Metadata({ data: "json, name=query" })
  query: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
