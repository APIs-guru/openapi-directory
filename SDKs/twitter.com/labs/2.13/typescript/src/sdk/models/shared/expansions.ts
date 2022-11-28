import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
import { Video } from "./video";
import { AnimatedGif } from "./animatedgif";
import { Poll } from "./poll";



export class Expansions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: any[];

  @SpeakeasyMetadata({ data: "json, name=places" })
  places?: any[];

  @SpeakeasyMetadata({ data: "json, name=polls", elemType: Poll })
  polls?: Poll[];

  @SpeakeasyMetadata({ data: "json, name=tweets" })
  tweets?: any[];

  @SpeakeasyMetadata({ data: "json, name=users" })
  users?: any[];
}
