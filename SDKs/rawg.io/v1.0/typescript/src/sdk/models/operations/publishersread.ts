import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PublishersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishersReadPathParams;
}


export class PublishersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publisherSingle?: shared.PublisherSingle;

  @SpeakeasyMetadata()
  statusCode: number;
}
