import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DfsSlatesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class DfsSlatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: DfsSlatesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tournamentid" })
  tournamentid: string;
}


export class DfsSlatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfsSlatesPathParams;
}


export class DfsSlatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dfsSlates?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
