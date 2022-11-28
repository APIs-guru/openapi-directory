import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChartFavStarResponseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: boolean;
}
