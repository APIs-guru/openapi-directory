import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum {
    One00 = "1.0.0"
}


export class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wmtsVersion" })
  wmtsVersion: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum;
}


export class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams;
}


export class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
