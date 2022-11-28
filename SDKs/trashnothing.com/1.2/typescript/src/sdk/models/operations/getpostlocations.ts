import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPostLocations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetPostLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetPostLocations200ApplicationJson })
  getPostLocations200ApplicationJsonObjects?: GetPostLocations200ApplicationJson[];
}
