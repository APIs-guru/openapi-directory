import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum {
    One00 = "1.0.0"
}


export class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=wmtsVersion" })
  wmtsVersion: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlWmtsVersionEnum;
}


export class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlPathParams;
}


export class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXmlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
