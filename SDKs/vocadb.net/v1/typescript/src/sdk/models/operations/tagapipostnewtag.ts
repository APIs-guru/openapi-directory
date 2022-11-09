import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagApiPostNewTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class TagApiPostNewTagRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TagApiPostNewTagQueryParams;
}


export class TagApiPostNewTagResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagBaseContract?: shared.TagBaseContract;
}
