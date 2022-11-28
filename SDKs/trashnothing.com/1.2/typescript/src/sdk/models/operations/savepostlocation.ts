import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SavePostLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=longitude" })
  longitude: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name: string;
}


export class SavePostLocation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SavePostLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: SavePostLocationRequestBody;
}


export class SavePostLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: SavePostLocation200ApplicationJson })
  savePostLocation200ApplicationJsonObjects?: SavePostLocation200ApplicationJson[];
}
