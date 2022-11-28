import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ByeWeeksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ByeWeeksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ByeWeeksPathParams;
}


export class ByeWeeksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byes?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
