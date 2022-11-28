import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScreenshotQuerySchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=force" })
  force?: boolean;

  @SpeakeasyMetadata({ data: "json, name=thumb_size" })
  thumbSize?: number[];

  @SpeakeasyMetadata({ data: "json, name=window_size" })
  windowSize?: number[];
}
