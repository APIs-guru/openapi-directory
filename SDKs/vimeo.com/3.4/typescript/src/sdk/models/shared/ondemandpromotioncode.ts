import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OnDemandPromotionCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=max_uses" })
  maxUses: number;

  @SpeakeasyMetadata({ data: "json, name=uses" })
  uses: number;
}
