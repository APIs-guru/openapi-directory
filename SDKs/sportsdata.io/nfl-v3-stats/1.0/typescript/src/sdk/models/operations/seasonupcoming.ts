import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SeasonUpcomingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class SeasonUpcomingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SeasonUpcomingPathParams;
}


export class SeasonUpcomingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seasonUpcoming200ApplicationJsonInteger?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
