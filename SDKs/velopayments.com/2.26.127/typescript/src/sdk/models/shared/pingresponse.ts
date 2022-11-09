import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=webhookId" })
  webhookId?: string;
}
