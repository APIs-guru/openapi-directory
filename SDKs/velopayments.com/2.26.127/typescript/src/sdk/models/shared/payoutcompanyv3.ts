import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayoutCompanyV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=companyName" })
  companyName: string;
}
