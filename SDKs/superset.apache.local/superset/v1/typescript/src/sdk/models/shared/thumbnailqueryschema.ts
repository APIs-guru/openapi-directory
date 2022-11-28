import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ThumbnailQuerySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;
}
