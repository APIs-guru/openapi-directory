import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlatformSingle extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=games_count" })
  gamesCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=image_background" })
  imageBackground?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=year_end" })
  yearEnd?: number;

  @Metadata({ data: "json, name=year_start" })
  yearStart?: number;
}
