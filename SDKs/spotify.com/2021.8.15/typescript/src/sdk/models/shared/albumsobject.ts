import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlbumObject } from "./albumobject";


export class AlbumsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=albums", elemType: shared.AlbumObject })
  albums?: AlbumObject[];
}
