import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayorBrandingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectiveAlias" })
  collectiveAlias?: string;

  @Metadata({ data: "json, name=dbaName" })
  dbaName?: string;

  @Metadata({ data: "json, name=logoUrl" })
  logoUrl: string;

  @Metadata({ data: "json, name=payorName" })
  payorName: string;

  @Metadata({ data: "json, name=supportContact" })
  supportContact?: string;
}
