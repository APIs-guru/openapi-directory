import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlbumObject } from "./albumobject";



export class AlbumsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albums", elemType: AlbumObject })
  albums?: AlbumObject[];
}
