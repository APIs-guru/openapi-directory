import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DevelopersReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DevelopersReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DevelopersReadPathParams;
}


export class DevelopersReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  developerSingle?: shared.DeveloperSingle;

  @Metadata()
  statusCode: number;
}
