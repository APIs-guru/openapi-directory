import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTeamTeamnamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamname" })
  teamname: string;
}


export class GetTeamTeamname200ApplicationJson extends SpeakeasyBase {
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


export class GetTeamTeamnameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamTeamnamePathParams;
}


export class GetTeamTeamnameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTeamTeamname200ApplicationJsonObject?: GetTeamTeamname200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
