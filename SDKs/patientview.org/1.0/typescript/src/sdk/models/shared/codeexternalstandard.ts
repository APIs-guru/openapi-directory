import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalStandard } from "./externalstandard";



export class CodeExternalStandard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codeString" })
  codeString?: string;

  @SpeakeasyMetadata({ data: "json, name=externalStandard" })
  externalStandard?: ExternalStandard;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
