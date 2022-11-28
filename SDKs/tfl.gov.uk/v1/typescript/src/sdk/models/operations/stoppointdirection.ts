import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPointDirectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=toStopPointId" })
  toStopPointId: string;
}


export class StopPointDirectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lineId" })
  lineId?: string;
}


export class StopPointDirectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointDirectionPathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointDirectionQueryParams;
}


export class StopPointDirectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopPointDirection200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  stopPointDirection200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  stopPointDirection200TextJsonString?: string;

  @SpeakeasyMetadata()
  stopPointDirection200TextXmlString?: string;
}
