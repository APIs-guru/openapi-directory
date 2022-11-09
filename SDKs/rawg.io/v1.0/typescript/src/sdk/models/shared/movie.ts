import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Movie extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=preview" })
  preview?: string;
}
