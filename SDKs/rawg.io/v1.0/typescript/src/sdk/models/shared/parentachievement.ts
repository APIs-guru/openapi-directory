import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ParentAchievement extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=percent" })
  percent?: string;
}
