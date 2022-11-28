import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFindingPagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scanId" })
  scanId: number;
}


export class GetFindingPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFindingPagePathParams;
}


export class GetFindingPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Findings })
  findings?: shared.Findings[];

  @SpeakeasyMetadata()
  statusCode: number;
}
