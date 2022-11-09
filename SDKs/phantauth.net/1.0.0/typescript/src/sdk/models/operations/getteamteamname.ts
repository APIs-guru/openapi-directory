import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTeamTeamnamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamname" })
  teamname: string;
}


export class GetTeamTeamnameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamTeamnamePathParams;
}


export class GetTeamTeamname200ApplicationJson extends SpeakeasyBase {
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


export class GetTeamTeamnameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTeamTeamname200ApplicationJsonObject?: GetTeamTeamname200ApplicationJson;

  @Metadata()
  statusCode: number;
}
