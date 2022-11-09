import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PersonSingle extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=rating" })
  rating?: string;

  @Metadata({ data: "json, name=rating_top" })
  ratingTop?: number;

  @Metadata({ data: "json, name=reviews_count" })
  reviewsCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
