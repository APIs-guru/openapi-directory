import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishersReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PublishersReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishersReadPathParams;
}


export class PublishersReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  publisherSingle?: shared.PublisherSingle;

  @Metadata()
  statusCode: number;
}
