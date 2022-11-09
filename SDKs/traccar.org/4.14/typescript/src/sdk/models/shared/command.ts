import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Command extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
