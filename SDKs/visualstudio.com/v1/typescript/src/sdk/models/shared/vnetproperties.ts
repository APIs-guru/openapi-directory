import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VnetProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=subnetId" })
  subnetId?: string;
}
