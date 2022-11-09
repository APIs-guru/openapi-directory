import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Line extends SpeakeasyBase {
  @Metadata({ data: "json, name=handset_name" })
  handsetName?: string;

  @Metadata({ data: "json, name=sip_id" })
  sipId?: string;
}
