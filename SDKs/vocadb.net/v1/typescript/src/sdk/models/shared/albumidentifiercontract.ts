import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlbumIdentifierContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
