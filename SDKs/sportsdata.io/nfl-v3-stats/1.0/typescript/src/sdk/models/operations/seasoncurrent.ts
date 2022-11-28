import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SeasonCurrentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class SeasonCurrentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SeasonCurrentPathParams;
}


export class SeasonCurrentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seasonCurrent200ApplicationJsonInteger?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
