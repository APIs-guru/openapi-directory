import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=contentDisposition" })
  contentDisposition?: string;

  @Metadata({ data: "json, name=contentEncoding" })
  contentEncoding?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=lastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
