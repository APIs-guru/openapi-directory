import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewsByTeamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class NewsByTeamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NewsByTeamPathParams;
}


export class NewsByTeamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  news?: any[];

  @Metadata()
  statusCode: number;
}
