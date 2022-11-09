import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExternalStandard } from "./externalstandard";


export class CodeExternalStandard extends SpeakeasyBase {
  @Metadata({ data: "json, name=codeString" })
  codeString?: string;

  @Metadata({ data: "json, name=externalStandard" })
  externalStandard?: ExternalStandard;

  @Metadata({ data: "json, name=id" })
  id?: number;
}
