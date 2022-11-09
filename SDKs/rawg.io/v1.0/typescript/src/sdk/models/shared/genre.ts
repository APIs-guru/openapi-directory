import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Genre extends SpeakeasyBase {
  @Metadata({ data: "json, name=games_count" })
  gamesCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image_background" })
  imageBackground?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}
