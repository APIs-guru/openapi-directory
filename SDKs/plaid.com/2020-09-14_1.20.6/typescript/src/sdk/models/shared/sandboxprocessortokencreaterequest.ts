import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SandboxProcessorTokenCreateRequestOptions } from "./sandboxprocessortokencreaterequestoptions";



export class SandboxProcessorTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: SandboxProcessorTokenCreateRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
