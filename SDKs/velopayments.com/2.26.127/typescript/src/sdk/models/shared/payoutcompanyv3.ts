import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayoutCompanyV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName: string;
}
