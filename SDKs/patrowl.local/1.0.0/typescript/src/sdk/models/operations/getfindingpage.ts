import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFindingPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=scanId" })
  scanId: number;
}


export class GetFindingPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFindingPagePathParams;
}


export class GetFindingPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Findings })
  findings?: shared.Findings[];

  @Metadata()
  statusCode: number;
}
