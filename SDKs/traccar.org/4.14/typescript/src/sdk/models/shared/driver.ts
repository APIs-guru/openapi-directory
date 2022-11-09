import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Driver extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uniqueId" })
  uniqueId?: string;
}
