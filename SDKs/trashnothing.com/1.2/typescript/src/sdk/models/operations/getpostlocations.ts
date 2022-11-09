import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPostLocations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetPostLocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetPostLocations200ApplicationJson })
  getPostLocations200ApplicationJsonObjects?: GetPostLocations200ApplicationJson[];
}
