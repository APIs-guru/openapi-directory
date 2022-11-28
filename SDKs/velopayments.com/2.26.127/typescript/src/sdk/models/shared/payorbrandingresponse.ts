import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayorBrandingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectiveAlias" })
  collectiveAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=dbaName" })
  dbaName?: string;

  @SpeakeasyMetadata({ data: "json, name=logoUrl" })
  logoUrl: string;

  @SpeakeasyMetadata({ data: "json, name=payorName" })
  payorName: string;

  @SpeakeasyMetadata({ data: "json, name=supportContact" })
  supportContact?: string;
}
