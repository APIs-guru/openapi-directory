import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Line extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=handset_name" })
  handsetName?: string;

  @SpeakeasyMetadata({ data: "json, name=sip_id" })
  sipId?: string;
}
