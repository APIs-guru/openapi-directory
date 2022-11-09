import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ThumbnailQuerySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;
}
