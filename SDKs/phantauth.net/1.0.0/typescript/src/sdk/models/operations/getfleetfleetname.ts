import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFleetFleetnamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fleetname" })
  fleetname: string;
}


export class GetFleetFleetnameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFleetFleetnamePathParams;
}


export class GetFleetFleetname200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=@id" })
  atId?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=logo_email" })
  logoEmail?: string;

  @Metadata({ data: "json, name=members" })
  members?: any[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: string;

  @Metadata({ data: "json, name=sub" })
  sub: string;
}


export class GetFleetFleetnameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFleetFleetname200ApplicationJsonObject?: GetFleetFleetname200ApplicationJson;

  @Metadata()
  statusCode: number;
}
