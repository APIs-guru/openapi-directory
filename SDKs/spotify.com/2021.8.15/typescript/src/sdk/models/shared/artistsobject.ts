import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistObject } from "./artistobject";



export class ArtistsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artists", elemType: ArtistObject })
  artists?: ArtistObject[];
}
