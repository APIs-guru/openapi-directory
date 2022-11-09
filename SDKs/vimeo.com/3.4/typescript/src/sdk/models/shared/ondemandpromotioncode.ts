import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OnDemandPromotionCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=max_uses" })
  maxUses: number;

  @Metadata({ data: "json, name=uses" })
  uses: number;
}
