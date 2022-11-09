import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SandboxProcessorTokenCreateRequestOptions } from "./sandboxprocessortokencreaterequestoptions";


export class SandboxProcessorTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=institution_id" })
  institutionId: string;

  @Metadata({ data: "json, name=options" })
  options?: SandboxProcessorTokenCreateRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
