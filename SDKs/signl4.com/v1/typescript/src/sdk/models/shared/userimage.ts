import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=contentDisposition" })
  contentDisposition?: string;

  @SpeakeasyMetadata({ data: "json, name=contentEncoding" })
  contentEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
