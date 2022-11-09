import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScreenShot extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
