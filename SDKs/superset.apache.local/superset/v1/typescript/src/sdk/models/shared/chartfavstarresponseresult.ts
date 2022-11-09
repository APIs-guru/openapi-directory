import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChartFavStarResponseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=value" })
  value?: boolean;
}
