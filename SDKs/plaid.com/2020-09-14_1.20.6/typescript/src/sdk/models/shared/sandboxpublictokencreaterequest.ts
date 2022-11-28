import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductsEnum } from "./productsenum";
import { SandboxPublicTokenCreateRequestOptions } from "./sandboxpublictokencreaterequestoptions";



// SandboxPublicTokenCreateRequest
/** 
 * SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
**/
export class SandboxPublicTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=initial_products" })
  initialProducts: ProductsEnum[];

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: SandboxPublicTokenCreateRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
