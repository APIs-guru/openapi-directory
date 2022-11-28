import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProfileImages200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}


export class GetProfileImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetProfileImages200ApplicationJson })
  getProfileImages200ApplicationJsonObjects?: GetProfileImages200ApplicationJson[];
}
