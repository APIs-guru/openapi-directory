import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScreenshotQuerySchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=thumb_size" })
  thumbSize?: number[];

  @Metadata({ data: "json, name=window_size" })
  windowSize?: number[];
}
