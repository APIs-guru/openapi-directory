import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}


export class GetTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagPathParams;
}


export class GetTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
