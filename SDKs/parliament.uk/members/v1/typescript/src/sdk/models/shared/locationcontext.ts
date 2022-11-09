import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LocationContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: number;

  @Metadata({ data: "json, name=typeName" })
  typeName?: string;
}
