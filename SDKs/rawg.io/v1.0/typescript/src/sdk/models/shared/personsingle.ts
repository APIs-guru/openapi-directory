import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PersonSingle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=games_count" })
  gamesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=image_background" })
  imageBackground?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: string;

  @SpeakeasyMetadata({ data: "json, name=rating_top" })
  ratingTop?: number;

  @SpeakeasyMetadata({ data: "json, name=reviews_count" })
  reviewsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
