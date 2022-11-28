import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFleetFleetnamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fleetname" })
  fleetname: string;
}


export class GetFleetFleetname200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@id" })
  atId?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=logo_email" })
  logoEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: any[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=sub" })
  sub: string;
}


export class GetFleetFleetnameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFleetFleetnamePathParams;
}


export class GetFleetFleetnameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFleetFleetname200ApplicationJsonObject?: GetFleetFleetname200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
