import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SavePostLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=latitude" })
  latitude: number;

  @Metadata({ data: "multipart_form, name=longitude" })
  longitude: number;

  @Metadata({ data: "multipart_form, name=name" })
  name: string;
}


export class SavePostLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: SavePostLocationRequestBody;
}


export class SavePostLocation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SavePostLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.SavePostLocation200ApplicationJson })
  savePostLocation200ApplicationJsonObjects?: SavePostLocation200ApplicationJson[];
}
