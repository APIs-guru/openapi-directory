import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Photo } from "./photo";
import { Video } from "./video";
import { AnimatedGif } from "./animatedgif";
import { Poll } from "./poll";


export class Expansions extends SpeakeasyBase {
  @Metadata({ data: "json, name=media" })
  media?: any[];

  @Metadata({ data: "json, name=places" })
  places?: any[];

  @Metadata({ data: "json, name=polls", elemType: shared.Poll })
  polls?: Poll[];

  @Metadata({ data: "json, name=tweets" })
  tweets?: any[];

  @Metadata({ data: "json, name=users" })
  users?: any[];
}
