import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinationModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
