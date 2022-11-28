import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Person extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;
}
