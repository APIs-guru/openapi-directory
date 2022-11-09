import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ArtistObject } from "./artistobject";


export class ArtistsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=artists", elemType: shared.ArtistObject })
  artists?: ArtistObject[];
}
