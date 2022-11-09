import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductsEnum } from "./productsenum";
import { SandboxPublicTokenCreateRequestOptions } from "./sandboxpublictokencreaterequestoptions";


// SandboxPublicTokenCreateRequest
/** 
 * SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
**/
export class SandboxPublicTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=initial_products" })
  initialProducts: ProductsEnum[];

  @Metadata({ data: "json, name=institution_id" })
  institutionId: string;

  @Metadata({ data: "json, name=options" })
  options?: SandboxPublicTokenCreateRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
