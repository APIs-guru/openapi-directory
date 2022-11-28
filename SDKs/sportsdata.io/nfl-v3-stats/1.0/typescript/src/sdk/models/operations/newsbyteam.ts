import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewsByTeamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team" })
  team: string;
}


export class NewsByTeamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NewsByTeamPathParams;
}


export class NewsByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  news?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
