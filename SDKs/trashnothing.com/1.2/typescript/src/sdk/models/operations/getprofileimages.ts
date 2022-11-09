import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProfileImages200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;
}


export class GetProfileImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetProfileImages200ApplicationJson })
  getProfileImages200ApplicationJsonObjects?: GetProfileImages200ApplicationJson[];
}
