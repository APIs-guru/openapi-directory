import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VnetProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subnetId" })
  subnetId?: string;
}
